import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, wrap, eyebrow } from "@/components/site-chrome";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — AAI Caretaker Trust, Chembur" },
      { name: "description", content: "Key upcoming social welfare initiatives and CSR partnerships by AAI Caretaker NGO." },
      { property: "og:title", content: "Programs — AAI Caretaker Trust" },
      { property: "og:description", content: "Free solar projects under CSR and a free cancer care support centre." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    tag: "CSR Partnership & Green Energy",
    title: "1) Free Solar Project to School, College & Hospital under CSR Activities",
    lead: <>AAI Caretaker NGO is launching a major renewable energy initiative to install 5KW Solar Panel Systems (and higher capacity units) at Vinay High School (MMRDA Colony, Chembur, Mumbai), Zilla Parishad schools in Nashik, local colleges, and community hospitals under Corporate Social Responsibility (CSR).</>,
    listTitle: "Key Objectives & Community Impact:",
    items: [
      ["Free Education Commitment", "Participating schools commit to providing free education to 10 or more underprivileged or single-parent children annually."],
      ["Educational Re-investment", "Electricity savings generated from solar units fund textbooks, stationery, digital learning tools, and student welfare programs."],
      ["10-Year CSR Mentorship", "Corporate partners are honored with permanent branding plaques on solar units and recognized as long-term student mentors."],
      ["Tax Benefits U/S 80G", "Corporate CSR contributions are 100% eligible for tax deductions under Section 80G of the Income Tax Act 1961 (Regd. CSR00005816 / 12AA)."],
      ["Environmental Leadership", "Direct contribution to India's clean energy mission, reducing carbon emissions and fostering green energy awareness."],
    ],
    cta: "View Official Solar CSR Proposal PDF ↗",
  },
  {
    tag: "Healthcare Relief & Social Welfare",
    title: "2) Cancer Centre (Food & Accommodation Free)",
    lead: <>To support cancer patients and their families traveling from rural and impoverished areas to Mumbai for critical oncology treatment, AAI Caretaker NGO is establishing a dedicated <strong>Cancer Care Support Center</strong> providing <strong>100% free food and accommodation</strong>.</>,
    listTitle: "Key Services & Facilities:",
    items: [
      ["Free Accommodation", "Safe, clean, and hygienic lodging for cancer patients and their primary family caregivers during medical treatment cycles."],
      ["Free Nutritional Meals", "Healthy, freshly cooked, nutritious meals provided daily to patients and accompanying relatives."],
      ["Patient Assistance & Relief", "Coordination with medical centers, financial aid support, and distribution of essential care kits."],
      ["Community Care", "Conducted in collaboration with youth councils, social volunteers, and donor partners to ease the financial and emotional burden on vulnerable families fighting cancer."],
    ],
    cta: "Support / Inquire About Cancer Care Centre ↗",
  },
];

function Programs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className={`${wrap} py-16 md:py-[70px]`}>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-primary md:text-[52px]">Programs </h1>
        <p className="mt-6 max-w-[720px] text-[17px] leading-relaxed text-muted-foreground">
          Key upcoming social welfare initiatives and CSR partnerships by AAI Caretaker NGO.
        </p>
      </section>

      <div className={`${wrap} space-y-8 pb-20`}>
        {programs.map((p) => (
          <article key={p.title} className="rounded-md border border-border border-l-4 border-l-gold bg-card p-7 md:p-10">
            <span className={`${eyebrow} inline-block rounded-full bg-sage px-3 py-1 text-[12px] text-primary`}>{p.tag}</span>
            <h2 className="mt-5 text-2xl font-semibold leading-[1.25] text-primary md:text-[28px]">{p.title}</h2>
            <p className="mt-5 text-[16px] font-medium leading-relaxed text-foreground">{p.lead}</p>
            <h3 className="mt-7 text-[16px] font-semibold text-foreground">{p.listTitle}</h3>
            <ul className="mt-4 space-y-3 pl-4">
              {p.items.map(([k, v]) => (
                <li key={k} className="border-l-2 border-sage pl-4 text-[14px] leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">{k}:</span> {v}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-8 inline-flex items-center rounded-[3px] bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">{p.cta}</a>
          </article>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
