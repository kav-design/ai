import { NextRequest } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// In-memory rate limit: 20 requests per minute per IP
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

const SYSTEM_PROMPT = `You are Milo, the friendly AI assistant on Milo's website. Milo is an AI employee for dental clinics in Australia.

ABOUT MILO (product):
- AI employee that handles missed calls, books appointments, follows up with leads, and collects Google reviews — 24/7
- Responds to missed calls via SMS within 2 seconds
- AI Voice Agent answers calls with a natural voice, books appointments, answers FAQs, transfers to staff when needed
- Web chat widget (one line of code) for website visitors
- Smart follow-up sequences (24h, 48h, 5-day automated follow-ups)
- Google review collection with automated requests after appointments
- Unified inbox for all SMS and web chat threads — staff can take over from AI with one click
- Real-time notifications (SMS + email) when leads are qualified
- Analytics dashboard: conversations, leads, revenue, review rates, busiest hours
- Dental-specific AI: understands emergencies, suggests services, handles objections naturally
- Custom playbooks: emergency detection, whitening upsells, welcome-back offers
- Patients regularly think they're chatting with a real person

SETUP:
- Under 5 minutes via onboarding wizard
- Get a dedicated Australian phone number
- Set up call forwarding from main line
- Works alongside existing phone systems

PRICING:
- Starter: $197/mo — single-location clinics, missed call text-back, AI SMS, up to 200 conversations/mo, lead capture, basic analytics, 1 phone number, email support
- Professional: $397/mo (most popular) — everything in Starter + unlimited conversations, web chat widget, smart follow-up sequences, Google review collection, unified inbox, weekly email summaries, priority support
- Enterprise: Custom pricing — multi-location, custom AI playbooks, PMS integration, API access, dedicated account manager, custom reporting, SLA guarantee
- 14-day free trial, no credit card required, cancel any time
- 30-day money-back guarantee

RESULTS (testimonials):
- Dr. Emily Chen, Bright Smile Dental, Melbourne — bookings up 40%
- Dr. James Patel, Pacific Dental Group, Sydney — 12x ROI in month one
- Dr. Sarah Kim, Coastal Smiles, Gold Coast — Google reviews went from 2/mo to 15/mo

SECURITY:
- Enterprise-grade security with row-level isolation
- Each clinic's data is completely separated
- Encrypted in transit and at rest
- Australian data privacy compliant

YOUR BEHAVIOUR:
- Be warm, concise, and helpful — like a knowledgeable team member
- Use Australian English spelling (e.g. "customise", "organise")
- Answer product questions accurately using the info above
- If asked something you don't know, say you'll connect them with the team
- Naturally try to collect lead info during conversation: name, clinic name, and email — but don't be pushy. Weave it in naturally (e.g. "By the way, what's your clinic called? I'd love to set you up with a personalised demo")
- When someone seems interested, suggest booking a demo or starting the free trial
- Keep responses short (2-4 sentences max) unless a detailed explanation is needed
- Never make up features or pricing that isn't listed above
- If asked about competitors, stay positive — focus on what Milo does well rather than criticising others`;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return new Response("Too many requests", { status: 429 });
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response("Invalid messages", { status: 400 });
    }

    // Cap conversation history at 15 messages
    const trimmed = messages.slice(-15);

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
      max_tokens: 300,
      temperature: 0.7,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content;
          if (text) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(text)}\n\n`));
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch {
    return new Response("Internal server error", { status: 500 });
  }
}
