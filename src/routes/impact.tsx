import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, wrap, eyebrow } from "@/components/site-chrome";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Imapct/Stories — AAI Caretaker Trust, Chembur" },
      { name: "description", content: "Impact and Work done by AAI Caretaker NGO." },
      { property: "og:title", content: "Imapct/Stories — AAI Caretaker Trust" },
      { property: "og:description", content: "Imapct/Stories of AAI" },
    ],
  }),
  component: Impact,
});

const cases = [
  ["Medical Help Request", "Mr. Jitendra Vishwas Shinde (Mother – Mrs. Alka Vishwas Shinde)"],
  ["Educational Help Request", "Tarannoum Sayyed"],
  ["Educational Help Request", "Panalal Yadhav for daughter Aarti Yadhav (Jr. KG Student of Vinay High School)"],
];

function Gallery({ items }: { items: string[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
      {items.map((label) => (
        <figure key={label} className="rounded-md border border-border bg-card p-3">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[3px] bg-secondary px-4 text-center text-[13px] text-muted-foreground">
            Photo to come
          </div>
          <figcaption className="mt-3 text-[13px] text-muted-foreground">{label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Section({ tag, title, children }: { tag: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-14">
      <p className={`${eyebrow} text-primary`}>{tag}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.2] text-primary md:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

function Impact() {
    return (

        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
        <div className={wrap}>
        <Section tag="22 April 2010" title="AAI CARETAKER Celebrates 1st Anniversary.">
          <div className="mt-6  space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>On 22nd April 2010, AAI CARETAKER completed an eventful first year. On this day in 2009, AAI CARETAKER was born and registered under the Societies Registration Act 1860.</p>
            <p>We thank all our Trustees, Members, Networking Partners, Well Wishers, and seniors without whom it would not have been possible to elevate to this height. We are proud of our journey and impact for the welfare of society, and we look forward to continuing our mission for years to come.</p>
          </div>
          <Gallery items={["Letter of thanks", "HEDA letter", "Certificate, Indore", "Reliance community partner", "UL recognition", "With partners"]} />
        </Section>
        <Section tag="11 February 2014" title="Reliance Employee Volunteering Day.">
            <p className="mt-6  text-[15px] leading-relaxed text-muted-foreground">On Tuesday, February 11, 2014, Reliance Companies celebrated Employee Volunteering Day at Hermitage, Dhirubhai Ambani Knowledge City. On that occasion, Reliance cherished AAI CARETAKER (NGO) as a community partner.</p>
            <Gallery items={["Safer Roads Safer India certificate"]} />
        </Section>
        <Section tag="3 September 2015" title="Safer Road Safer India Initiative.">
            <p className="mt-6  text-[15px] leading-relaxed text-muted-foreground">Thanks to Mr. Scott Ganske, Miss Deepa Shanker &amp; Mr. Vinki Sir for conducting the Safer Road Safer India classroom session on 3rd Sept 2015. We are proud to join this initiative representing AAI CARETAKER (NGO), Chembur, Mumbai.</p>
            <Gallery items={["Letter"]} />
        </Section>
                <Section tag="Case studies" title="Medical & Educational Help Case Studies.">
          <p className="mt-6  text-[15px] leading-relaxed text-muted-foreground">AAI CARETAKER actively responds to direct appeals and request letters from families in need of urgent medical treatment and educational support:</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {cases.map(([t, n]) => (
              <li key={n} className="rounded-md bg-sage p-5">
                <div className={`${eyebrow} text-primary`}>{t}</div>
                <div className="mt-2 text-[14px] leading-relaxed text-foreground">{n}</div>
              </li>
            ))}
          </ul>
          <Gallery items={["Request letter", "Scholarship request", "Neuro Foundation letter", "Scholarship application", "GYSD Community Partner"]} />
        </Section>
             </div>
         <SiteFooter />
        </div>
    );
}