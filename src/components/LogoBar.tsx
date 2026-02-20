import ScrollReveal from "./ScrollReveal";

export default function LogoBar() {
  return (
    <section className="border-y border-border py-14">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Trusted by dental clinics across Australia
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {[
              "Bright Smile Dental",
              "Pacific Dental Group",
              "Coastal Smiles",
              "Sydney Dental Co.",
              "Melbourne Family Dental",
              "Brisbane Dental Care",
            ].map((name) => (
              <span
                key={name}
                className="text-base font-semibold text-charcoal/15 transition-colors duration-500 hover:text-charcoal/30"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
