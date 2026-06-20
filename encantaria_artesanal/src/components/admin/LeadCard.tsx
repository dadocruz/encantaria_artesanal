import type { Lead } from "@/types/lead";
import { formatDate } from "@/lib/formatters";

export function LeadCard({ lead }: { lead: Lead }) {
  return (
    <div className="rounded-2xl border border-cobre/20 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-display text-lg text-vinho">{lead.name}</p>
          {lead.interest && (
            <p className="text-sm text-cobre">{lead.interest}</p>
          )}
        </div>
        <span className="text-xs text-marrom/50">
          {formatDate(lead.createdAt)}
        </span>
      </div>
      {lead.message && (
        <p className="mt-3 text-sm text-marrom/75">{lead.message}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-marrom/60">
        {lead.whatsapp && <span>WhatsApp: {lead.whatsapp}</span>}
        {lead.email && <span>E-mail: {lead.email}</span>}
        {lead.origin && <span>Origem: {lead.origin}</span>}
        {lead.utmSource && <span>UTM source: {lead.utmSource}</span>}
        {lead.utmCampaign && <span>UTM campaign: {lead.utmCampaign}</span>}
      </div>
    </div>
  );
}
