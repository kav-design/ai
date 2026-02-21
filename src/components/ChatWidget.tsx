"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const WELCOME_MESSAGE =
  "Hey there! I'm Milo, the AI assistant. Got questions about how Milo works, pricing, or want to book a demo? I'm here to help!";

const QUICK_CHIPS = [
  "How does Milo work?",
  "What's the pricing?",
  "Can I get a demo?",
  "What results do clinics see?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isStreaming) return;

      const userMessage: Message = { role: "user", content: text.trim() };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsStreaming(true);

      // Add empty assistant message for streaming
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const reader = res.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) throw new Error("No reader");

        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const token = JSON.parse(data) as string;
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (last?.role === "assistant") {
                  updated[updated.length - 1] = {
                    ...last,
                    content: last.content + token,
                  };
                }
                return updated;
              });
            } catch {
              // skip malformed chunks
            }
          }
        }
      } catch {
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last?.role === "assistant" && last.content === "") {
            updated[updated.length - 1] = {
              ...last,
              content:
                "Sorry, I'm having trouble connecting right now. Please try again in a moment!",
            };
          }
          return updated;
        });
      } finally {
        setIsStreaming(false);
      }
    },
    [messages, isStreaming],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleChip = (text: string) => {
    sendMessage(text);
  };

  // Only show chips if there's just the welcome message
  const showChips = messages.length === 1;

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-[9997] flex h-14 w-14 items-center justify-center rounded-full bg-terracotta shadow-lg shadow-terracotta/25 transition-colors hover:bg-terracotta-dark"
            aria-label="Open chat"
          >
            <MessageCircle size={24} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-[9997] flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl max-sm:inset-0 max-sm:rounded-none max-sm:border-0 sm:bottom-6 sm:right-6 sm:h-[560px] sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-charcoal px-5 py-4">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                  M
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-charcoal bg-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Milo</p>
                <p className="text-xs text-white/50">Online</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
                aria-label="Close chat"
              >
                <X size={18} className="text-white/70" />
              </button>
            </div>

            {/* Messages */}
            <div className="no-scrollbar flex-1 overflow-y-auto p-5">
              <div className="flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex items-end gap-2 ${
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="mb-1 flex-shrink-0">
                        <Zap size={12} className="text-terracotta" />
                      </div>
                    )}
                    <div
                      className={`max-w-[84%] px-4 py-3 ${
                        msg.role === "assistant"
                          ? "rounded-2xl rounded-tl-sm bg-teal text-white"
                          : "rounded-2xl rounded-tr-sm bg-cream-dark text-charcoal"
                      }`}
                    >
                      <p className="whitespace-pre-wrap text-[13px] leading-[1.55]">
                        {msg.content}
                        {msg.role === "assistant" &&
                          msg.content === "" &&
                          isStreaming && (
                            <span className="inline-flex items-center gap-1 pl-1">
                              <span className="typing-dot h-[5px] w-[5px] rounded-full bg-white/60" />
                              <span className="typing-dot h-[5px] w-[5px] rounded-full bg-white/60" />
                              <span className="typing-dot h-[5px] w-[5px] rounded-full bg-white/60" />
                            </span>
                          )}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Quick suggestion chips */}
                {showChips && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {QUICK_CHIPS.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => handleChip(chip)}
                        className="rounded-full border border-border bg-cream px-3.5 py-2 text-xs font-medium text-body transition-colors hover:border-teal hover:text-teal"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-border px-4 py-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message..."
                disabled={isStreaming}
                className="flex-1 rounded-full border border-border bg-cream px-4 py-2.5 text-xs text-charcoal outline-none placeholder:text-muted focus:border-teal disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal transition-colors hover:bg-teal-dark disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={14} className="text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
