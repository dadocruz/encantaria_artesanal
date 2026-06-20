export function RitualStep({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cobre/40 bg-creme font-display text-xl text-cobre">
        {number}
      </span>
      <h3 className="mt-4 font-display text-lg text-vinho">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-marrom/75">
        {description}
      </p>
    </div>
  );
}
