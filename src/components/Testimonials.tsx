import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were missing 30% of our calls. Now Milo catches every single one and books them in before we even know they called. Our bookings are up 40% this quarter.",
    name: "Dr. Emily Chen",
    role: "Owner, Bright Smile Dental",
    location: "Melbourne, VIC",
    stat: "40% more bookings",
  },
  {
    quote:
      "The follow-up sequences are incredible. Patients who would have disappeared now come back and book. Milo paid for itself in the first week.",
    name: "Dr. James Patel",
    role: "Principal Dentist, Pacific Dental Group",
    location: "Sydney, NSW",
    stat: "12x ROI in month one",
  },
  {
    quote:
      "Our Google reviews went from 2 per month to 15. Patients actually love getting the text — it makes it so easy. We're now the top-rated clinic in our area.",
    name: "Dr. Sarah Kim",
    role: "Owner, Coastal Smiles",
    location: "Gold Coast, QLD",
    stat: "7x more reviews",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-milo-600 uppercase">
            What clinics are saying
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Don&apos;t take our word for it
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover rounded-2xl border border-gray-100 bg-white p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Stat */}
              <div className="mb-4 rounded-lg bg-emerald-50 px-3 py-2">
                <p className="text-sm font-bold text-emerald-700">{t.stat}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-milo-100 to-milo-200 text-sm font-bold text-milo-700">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.role} &middot; {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
