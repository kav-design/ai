export default function LogoBar() {
  return (
    <section className="border-b border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm font-medium tracking-wide text-gray-400 uppercase">
          Trusted by forward-thinking dental clinics across Australia
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
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
              className="text-lg font-semibold text-gray-300 transition-colors hover:text-gray-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
