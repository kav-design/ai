import ScrollReveal from "./ScrollReveal";

export default function LogoBar() {
  return (
    <section className="relative border-y border-white/[0.04] py-14">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-8 text-center text-[11px] font-medium tracking-[0.15em] text-gray-600 uppercase">
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
                className="text-[15px] font-semibold text-white/[0.12] transition-colors duration-500 hover:text-white/[0.3]"
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
