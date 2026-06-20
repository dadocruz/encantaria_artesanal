export function AdminHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-3xl text-vinho">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-marrom/60">{description}</p>
        )}
      </div>
      {action}
    </header>
  );
}
