import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cobre">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-vinho sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-marrom/80">
          {subtitle}
        </p>
      )}
    </div>
  );
}
