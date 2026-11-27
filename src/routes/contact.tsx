import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader, SiteFooter, wrap, eyebrow } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Appeal — AAI Caretaker Trust, Chembur" },
      {
        name: "description",
        content:
          "Reach AAI Caretaker Trust in Chembur, Mumbai: appeal for support, bank and UPI donation details, PAN and tax registration details.",
      },
      { property: "og:title", content: "Contact Us & Appeal — AAI Caretaker Trust" },
      {
        property: "og:description",
        content:
          "Support our work: donation bank and UPI details, tax registration details, and how to reach the trust in Chembur, Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const bank: [string, string][] = [
  ["Account Number", "0027 / 10 / 01 / 002382"],
  ["Account Type", "Saving A/C"],
  ["Beneficiary Name", "THE MUMBAI DISTRICT CENTRAL COOPERATIVE BANK LIMITED, SWASTIK PARK"],
  [
    "Branch Address",
    "Mangal Anand Hospital, 48, Swastik Park, Umerishi Bappa Chowk, Sion-Trombay Road, Chembur, Mumbai - 400 071",
  ],
  ["IFSC Code", "MDCB0680027"],
  ["MICR Code", "400068027"],
];

const tax: [string, string][] = [
  ["PAN Card No", "AACTA5375Q"],
  ["TAN No", "MUMA36067D"],
  ["12A Registration", "Registered under Section 12A (a) of the Income Tax Act, 1961 (Reg No. 42990)"],
  ["Chartered Accountants", "MUSTAFA & TAYABI ASSOCIATES"],
  ["CA Office Address", "Off 237 A Jama Masjid Lane, Takiya Ward, Kurla (W), Mumbai – 400 070"],
];

const trust: [string, string][] = [
  ["Registration Details", "Reg. No. F 38629 & Reg. No. MAH/ Mum/855/09 GBBSD"],
  ["Reg Under 80G & 12AA of the I.T. Act 1961", "(Reg No. 42990)"],
  ["Address", "Room No. B/4, Ashok Nagar, Vasinaka, Chembur, Mumbai - 400 074, Maharashtra, India"],
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-l-4 border-gold pl-4 text-2xl font-semibold leading-[1.25] text-primary md:text-[28px]">
      {children}
    </h2>
  );
}

function DetailCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-md border-l-4 border-gold bg-secondary px-6 py-6 md:px-8 md:py-7">
      {children}
    </div>
  );
}

function Details({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="space-y-4">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt className="inline font-semibold text-foreground">{k}: </dt>
          <dd className="inline text-[14px] leading-relaxed text-foreground/85">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function ImagePlaceholder({ label, hint }: { label: string; hint: string }) {
  return (
    <figure className="mt-6 max-w-[340px] rounded-md border border-border bg-card p-3">
      <div className="flex aspect-[3/4] items-center justify-center rounded-[3px] bg-secondary px-4 text-center text-[13px] leading-relaxed text-muted-foreground">
        {hint}
      </div>
      <figcaption className="mt-3 text-[13px] text-muted-foreground">{label}</figcaption>
    </figure>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className={`${wrap} py-16 md:py-[70px]`}>
        <p className={`${eyebrow} text-primary`}>Contact us</p>
        <h1 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-primary md:text-[52px]">
          Contact us &amp; appeal.
        </h1>
        <p className="mt-6  text-[17px] leading-relaxed text-muted-foreground">
          Write to us, call us, or support our work directly. Every contribution helps AAI CARETAKER
          keep its services going without compromise.
        </p>
      </section>

      <div className={wrap}>
        <section className="border-t border-border py-14">
          <SectionTitle>Appeal for Support</SectionTitle>
          <div className="mt-6  space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              The AAI CARETAKER is committed to continuing its work with dedication and ever-greater
              efficiency, refusing to allow resource constraints to dampen its spirits. However, it
              would be a pity to witness an organisation such as this overstretched itself to meet
              the rising costs of service delivery. This would mean compromises not only in the
              quality of services but also with the very ethics and ethos of AAI CARETAKER.
            </p>
            <p>
              Herewith, our appeal goes out to all well-wishers of AAI CARETAKER to support and
              strengthen our work. We need your assistance and we shall be immensely grateful for
              the same. Your donations to AAI CARETAKER are qualified for tax deduction U/S 80G of
              IT Act 1961.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-14">
          <SectionTitle>Epilogue</SectionTitle>
          <p className="mt-6  text-[15px] leading-relaxed text-muted-foreground">
            AAI CARETAKER gratefully acknowledges the help received from all segments of society.
            The help has been in the form of economic support, technical assistance, and advice from
            its numerous well-wishers and patrons. The goodwill which AAI CARETAKER has generated
            has helped the organization to develop and to effectively meet the different needs of
            society.
          </p>
        </section>

        <section className="border-t border-border py-14">
          <SectionTitle>Send us a message</SectionTitle>
          <ContactForm />
        </section>

        <section className="border-t border-border pt-14 pb-20">
          <DetailCard>
            <h3 className="text-lg font-semibold text-primary">AAI CARETAKER TRUST</h3>
            <div className="mt-5">
              <Details rows={trust} />
              <div className="mt-4 text-[14px] leading-relaxed">
                <span className="font-semibold text-foreground">Contact: </span>
                <span className="text-foreground/85">Office: 022 – 25530537 | Mob: +91-9821624480 | Email: </span>
                <a
                  href="mailto:aaicaretaker@gmail.com"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  aaicaretaker@gmail.com
                </a>
              </div>
              <div className="mt-4 text-[14px] leading-relaxed">
                <span className="font-semibold text-foreground">Website: </span>
                <a
                  href="https://www.aaicaretaker.in"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  www.aaicaretaker.in
                </a>
              </div>
            </div>
          </DetailCard>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
