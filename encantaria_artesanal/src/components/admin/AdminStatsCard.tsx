export function AdminStatsCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-cobre/20 bg-white p-6 shadow-sm">
      <p className="text-sm text-marrom/60">{label}</p>
      <p className="mt-2 font-display text-3xl text-vinho">{value}</p>
      {hint && <p className="mt-1 text-xs text-marrom/50">{hint}</p>}
    </div>
  );
}
