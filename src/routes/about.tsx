import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, wrap, eyebrow } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AAI Caretaker Trust, Chembur" },
      { name: "description", content: "AAI CARETAKER is an NGO in Chembur, Mumbai: our aims, focus areas, milestones and recognition." },
      { property: "og:title", content: "About AAI Caretaker Trust" },
      { property: "og:description", content: "Our aims, focus areas, milestones and recognition." },
    ],
  }),
  component: About,
});

const focus = [
  ["Green Responsibility", "We work actively to protect the environment and our surroundings by developing non-contaminating technologies and processes. Our daily operations focus on efficient resource usage and a culture centered on continuously improving care of the environment under applicable regulations. We adopt the best practices to reduce or remove pollution, hazardous waste, and air pollution. Our forecast is to plant hundreds of trees in our area and continue to nurture them throughout the years."],
  ["Computer Education", "To provide computer educational aid to children, women, and men."],
  ["Healthcare & Community Care", "To provide free health care camps, baby playgrounds, and community care."],
  ["Consumer Helpline & Civic Facilities", "To create a consumer helpline and provide better civic facilities."],
  ["Sports & Playgrounds", "To provide playgrounds and support sports activities."],
  ["Sanitation & Public Toilets", "To organize, promote, and operationalize Shauchalayas (public toilets) for large-scale use in the area so everyone has access; to construct and maintain public toilets on a pay-and-use basis. Sanitation includes water supply, safe disposal of human waste, solid waste, and waste water management."],
  ["Water Preservation & Management", "To promote community water supply through preservation of traditional water sources, rainwater harvesting, and providing consultancy for solid waste management schemes."],
  ["Environmental R&D", "To carry out technical and social research and development studies on environmental care."],
  ["Welfare & Justice", "Animal welfare, social welfare, and criminal justice; working with government departments for transparency & accountability."],
  ["Women Empowerment", "Skill training for employment opportunities especially for women, and providing Mixed Bachat Gat, Laghu Udhyog & Mahila Bachat Gat."],
  ["Handicraft Support", "Providing computer education / telephone booths for handicraft persons."],
];

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

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className={`${wrap} py-16 md:py-[70px]`}>
        <p className={`${eyebrow} text-primary`}>About us</p>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-primary md:text-[52px]">
          A guardian’s purpose,<br />rooted in Chembur.
        </h1>
        <p className="mt-6 max-w-[720px] text-[17px] leading-relaxed text-muted-foreground">
          AAI CARETAKER is located in the Central Suburbs of Mumbai – Chembur, on the Eastern part of Mumbai, situated 22 km North East of Churchgate. The NGO is registered under the Societies Registration Act 1860 and registered under the Bombay Public Trust Act 1950.
        </p>
      </section>

      <section className="bg-forest text-primary-foreground">
        <div className={`${wrap} py-16`}>
          <p className={`${eyebrow} text-gold`}>Our aims &amp; objectives</p>
          <h2 className="mt-5 max-w-[800px] text-3xl font-semibold leading-[1.25] md:text-4xl">
            Plantation, Computer Education, Community Centres, Medical Assistance, Playgrounds, and Better Civic Facilities.
          </h2>
        </div>
      </section>

      <div className={wrap}>
        <section className="py-16">
          <p className={`${eyebrow} text-primary`}>Key focus areas</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {focus.map(([t, d], i) => (
              <article key={t} className={`rounded-md border border-border bg-card p-6 ${i === 0 ? "md:col-span-2" : ""}`}>
                <h3 className="text-xl font-medium text-primary">{t}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </section>

        <Section tag="22 April 2010" title="AAI CARETAKER Celebrates 1st Anniversary">
          <div className="mt-6 max-w-[760px] space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>On 22nd April 2010, AAI CARETAKER completed an eventful first year. On this day in 2009, AAI CARETAKER was born and registered under the Societies Registration Act 1860.</p>
            <p>We thank all our Trustees, Members, Networking Partners, Well Wishers, and seniors without whom it would not have been possible to elevate to this height. We are proud of our journey and impact for the welfare of society, and we look forward to continuing our mission for years to come.</p>
          </div>
          <Gallery items={["Letter of thanks", "HEDA letter", "Certificate, Indore", "Reliance community partner", "UL recognition", "With partners"]} />
        </Section>

        <Section tag="11 February 2014" title="Reliance Employee Volunteering Day">
          <p className="mt-6 max-w-[760px] text-[15px] leading-relaxed text-muted-foreground">On Tuesday, February 11, 2014, Reliance Companies celebrated Employee Volunteering Day at Hermitage, Dhirubhai Ambani Knowledge City. On that occasion, Reliance cherished AAI CARETAKER (NGO) as a community partner.</p>
          <Gallery items={["Safer Roads Safer India certificate"]} />
        </Section>

        <Section tag="3 September 2015" title="Safer Road Safer India Initiative">
          <p className="mt-6 max-w-[760px] text-[15px] leading-relaxed text-muted-foreground">Thanks to Mr. Scott Ganske, Miss Deepa Shanker &amp; Mr. Vinki Sir for conducting the Safer Road Safer India classroom session on 3rd Sept 2015. We are proud to join this initiative representing AAI CARETAKER (NGO), Chembur, Mumbai.</p>
          <Gallery items={["Letter"]} />
        </Section>

        <Section tag="Case studies" title="Medical & Educational Help Case Studies">
          <p className="mt-6 max-w-[760px] text-[15px] leading-relaxed text-muted-foreground">AAI CARETAKER actively responds to direct appeals and request letters from families in need of urgent medical treatment and educational support:</p>
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

      <section className="bg-forest text-primary-foreground">
        <div className={`${wrap} py-16`}>
          <p className={`${eyebrow} text-gold`}>AAI CARETAKER TRUST</p>
          <dl className="mt-6 grid gap-5 text-[14px] leading-relaxed md:grid-cols-2">
            {[
              ["Registration Details", "Reg. No. F 38629 & Reg. No. MAH/ Mum/855/09 GBBSD"],
              ["Tax registration", "Reg Under 80G & 12AA of the I.T. Act 1961 (Reg No. 42990)"],
              ["Address", "Room No. B/4, Ashok Nagar, Vasinaka, Chembur, Mumbai - 400 074, Maharashtra, India"],
              ["Contact", "Office: 022 – 25530537 | Mob: +91-9821624480"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-semibold text-gold">{k}</dt>
                <dd className="mt-1 text-primary-foreground/85">{v}</dd>
              </div>
            ))}
            <div>
              <dt className="font-semibold text-gold">Email</dt>
              <dd className="mt-1"><a href="mailto:aaicaretaker@gmail.com" className="underline underline-offset-4">aaicaretaker@gmail.com</a></dd>
            </div>
            <div>
              <dt className="font-semibold text-gold">Website</dt>
              <dd className="mt-1"><a href="https://www.aaicaretaker.in" className="underline underline-offset-4">www.aaicaretaker.in</a></dd>
            </div>
          </dl>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
