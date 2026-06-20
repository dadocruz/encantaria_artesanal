import { AdminHeader } from "@/components/admin/AdminHeader";
import { LeadCard } from "@/components/admin/LeadCard";
import { listLeads } from "@/services/leads";

export default async function AdminLeadsPage() {
  const leads = await listLeads();

  return (
    <div>
      <AdminHeader
        title="Leads"
        description="Contatos recebidos por formulário e botões do site."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
}
