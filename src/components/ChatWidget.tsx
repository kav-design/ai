"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, Send, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const WELCOME_MESSAGE =
  "Hey! I'm Milo. Ask me anything about how we help dental clinics catch more patients, or I can set you up with a demo.";

const QUICK_CHIPS = [
  "How does Milo work?",
  "What's the pricing?",
  "Book a demo",
  "What results do clinics see?",
];

// All positioning uses inline styles because the unlayered `body > *`
// CSS rule overrides Tailwind's layered utilities for position/z-index.
const PANEL_STYLE = {
  position: "fixed" as const,
  zIndex: 9999,
  bottom: 24,
  right: 24,
  width: 400,
  height: 580,
};

const PANEL_MOBILE_STYLE = {
  position: "fixed" as const,
  zIndex: 9999,
  inset: 0,
};

const BTN_STYLE = {
  position: "fixed" as const,
  bottom: 24,
  right: 24,
  zIndex: 9999,
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  useEffect(() => {
    if (open) {
      setShowTooltip(false);
      return;
    }
    const show = setTimeout(() => setShowTooltip(true), 2000);
    const hide = setTimeout(() => setShowTooltip(false), 7000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isStreaming) return;

      const userMessage: Message = { role: "user", content: text.trim() };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsStreaming(true);

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

        if (!res.ok) throw new Error(res.statusText);

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

  const showChips = messages.length === 1;

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Tooltip bubble */}
      <AnimatePresence>
        {!open && showTooltip && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed" as const,
              zIndex: 9999,
              bottom: 80,
              right: 24,
              padding: "10px 16px",
              borderRadius: 14,
              background: "#ffffff",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--color-charcoal)",
              whiteSpace: "nowrap" as const,
              pointerEvents: "none" as const,
            }}
          >
            Chat with Milo
            <div
              style={{
                position: "absolute",
                bottom: -5,
                right: 28,
                width: 10,
                height: 10,
                background: "#ffffff",
                transform: "rotate(45deg)",
                boxShadow: "2px 2px 4px rgba(0,0,0,0.04)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating MAi button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, y: 40, scale: 0.5 }}
            animate={{
              opacity: 1,
              y: [0, -5, 0],
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{
              opacity: { duration: 0.5 },
              scale: {
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              },
              y: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.8,
              },
            }}
            onClick={() => setOpen(true)}
            style={{
              ...BTN_STYLE,
              width: "auto",
              height: 44,
              padding: "0 36px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.15)",
              background:
                "linear-gradient(145deg, #c97f3f 0%, #b87333 45%, #9a4e2a 100%)",
              boxShadow:
                "0 6px 28px rgba(184, 115, 51, 0.4), 0 0 48px rgba(184, 115, 51, 0.12), inset 0 1px 0 rgba(255,255,255,0.18)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 8px 36px rgba(184, 115, 51, 0.5), 0 0 56px rgba(184, 115, 51, 0.18), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
            whileTap={{ scale: 0.94 }}
            aria-label="Open chat"
          >
            {/* Subtle glow ring */}
            <motion.span
              style={{
                position: "absolute",
                inset: -3,
                borderRadius: 9999,
                border: "1.5px solid rgba(184, 115, 51, 0.25)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 3.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />

            {/* Logo */}
            <img
              src="/logo.png"
              alt="Milo AI"
              style={{
                height: 28,
                width: "auto",
                filter: "brightness(0) invert(1)",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
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
            style={{
              ...(isMobile ? PANEL_MOBILE_STYLE : PANEL_STYLE),
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderRadius: isMobile ? 0 : 20,
              background: "#ffffff",
              border: isMobile ? "none" : "1px solid var(--color-border)",
              boxShadow: isMobile
                ? "none"
                : "0 25px 60px -12px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 20px",
                background: "var(--color-charcoal)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ position: "relative" }}>
                <div
                  className="flex items-center justify-center rounded-full bg-teal text-sm font-bold text-white"
                  style={{ width: 38, height: 38 }}
                >
                  M
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: -1,
                    right: -1,
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    background: "#34d399",
                    border: "2px solid var(--color-charcoal)",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <p className="text-sm font-semibold text-white">Milo</p>
                <p
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.45)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#34d399",
                      display: "inline-block",
                    }}
                  />
                  Online now
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                style={{ width: 32, height: 32 }}
                aria-label="Close chat"
              >
                <X size={16} className="text-white/60" />
              </button>
            </div>

            {/* Messages area */}
            <div
              className="no-scrollbar"
              style={{
                flex: 1,
                overflowY: "auto",
                padding: 20,
                background: "var(--color-cream)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      gap: 8,
                      flexDirection:
                        msg.role === "user" ? "row-reverse" : "row",
                    }}
                  >
                    {msg.role === "assistant" && (
                      <div style={{ marginBottom: 4, flexShrink: 0 }}>
                        <Zap size={11} className="text-terracotta" />
                      </div>
                    )}
                    <div
                      style={{
                        maxWidth: "82%",
                        padding: "10px 14px",
                        borderRadius:
                          msg.role === "assistant"
                            ? "16px 16px 16px 4px"
                            : "16px 16px 4px 16px",
                        background:
                          msg.role === "assistant"
                            ? "var(--color-teal)"
                            : "#ffffff",
                        color:
                          msg.role === "assistant"
                            ? "#ffffff"
                            : "var(--color-charcoal)",
                        boxShadow:
                          msg.role === "user"
                            ? "0 1px 3px rgba(0,0,0,0.06)"
                            : "none",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 13,
                          lineHeight: 1.55,
                          margin: 0,
                          whiteSpace: "pre-wrap",
                        }}
                      >
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
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginTop: 4,
                    }}
                  >
                    {QUICK_CHIPS.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => sendMessage(chip)}
                        style={{
                          padding: "8px 14px",
                          borderRadius: 9999,
                          border: "1px solid var(--color-border)",
                          background: "#ffffff",
                          fontSize: 12,
                          fontWeight: 500,
                          color: "var(--color-body)",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--color-teal)";
                          e.currentTarget.style.color = "var(--color-teal)";
                          e.currentTarget.style.background =
                            "var(--color-teal-light)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--color-border)";
                          e.currentTarget.style.color = "var(--color-body)";
                          e.currentTarget.style.background = "#ffffff";
                        }}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input bar */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                borderTop: "1px solid var(--color-border)",
                background: "#ffffff",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Milo anything..."
                disabled={isStreaming}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: 9999,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-cream)",
                  fontSize: 13,
                  color: "var(--color-charcoal)",
                  outline: "none",
                  opacity: isStreaming ? 0.5 : 1,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-teal)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                style={{
                  width: 38,
                  height: 38,
                  flexShrink: 0,
                  borderRadius: "50%",
                  border: "none",
                  background:
                    !input.trim() || isStreaming
                      ? "var(--color-border)"
                      : "var(--color-teal)",
                  cursor:
                    !input.trim() || isStreaming ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.15s ease",
                }}
                aria-label="Send message"
              >
                <Send size={15} className="text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body,
  );
}
