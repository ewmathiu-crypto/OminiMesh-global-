type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-6 ${
        highlighted
          ? "border-cyan-300/50 bg-cyan-300/10 shadow-2xl shadow-cyan-500/20"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      {highlighted && (
        <div className="mb-4 inline-flex w-fit items-center rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-950">
          Recommended
        </div>
      )}
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <div className="mt-4 flex items-end gap-2">
        <span className="text-4xl font-black text-white">{price}</span>
        {price !== "Custom" && (
          <span className="pb-1 text-sm text-slate-400">/month</span>
        )}
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-300">
        {features.map((feature) => (
          <li className="flex gap-3" key={feature}>
            <span className="mt-0.5 text-cyan-300">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 rounded-2xl px-5 py-3 text-sm font-bold transition ${
          highlighted
            ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
            : "bg-white text-slate-950 hover:bg-cyan-100"
        }`}
        type="button"
      >
        Join waitlist
      </button>
    </div>
  );
}
