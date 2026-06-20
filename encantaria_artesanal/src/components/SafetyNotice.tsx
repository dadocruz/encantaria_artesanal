import { siteConfig } from "@/config/site";

export function SafetyNotice({ text }: { text?: string }) {
  return (
    <div className="rounded-2xl border border-cobre/30 bg-creme/70 p-4 text-xs leading-relaxed text-marrom/70">
      <span className="mr-1 font-medium text-cobre">Aviso:</span>
      {text ?? siteConfig.noticeText}
    </div>
  );
}
