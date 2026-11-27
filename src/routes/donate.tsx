import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, wrap, eyebrow } from "@/components/site-chrome";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donation — AAI Caretaker Trust, Chembur" },
      { name: "description", content: "Donate to AAI Caretaker NGO." },
      { property: "og:title", content: "Donate — AAI Caretaker Trust" },
      { property: "og:description", content: "Donate to AAI Caretaker NGO." },
    ],
  }),
  component: Donate
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

function Donate() {
  return  (
    <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <div className={wrap}>
                <section className="border-t border-border py-14">
          <SectionTitle>Bank Account Details for Donations</SectionTitle>
          <DetailCard>
            <h3 className="text-lg font-semibold text-primary">
              THE MUMBAI DISTRICT CENTRAL CO-OP BANK LTD
            </h3>
            <div className="mt-5">
              <Details rows={bank} />
            </div>

            <div className="mt-7 border-t border-border pt-6">
              <p className="text-[14px] font-semibold text-primary">
                Scan to Pay via UPI (BHIM / GPay / PhonePe / Paytm)
              </p>
              <ImagePlaceholder
                label="UPI QR code"
                hint="QR code image to come — send the photo of the UPI card and it will be placed here."
              />
              <p className="mt-6 text-[14px]">
                <span className="font-semibold text-foreground">UPI ID: </span>
                <span className="rounded-[3px] bg-sage px-2 py-1 font-medium text-primary">
                  aaicaretaker27@mdcb
                </span>
              </p>
            </div>
          </DetailCard>
        </section>
    
        <section className="border-t border-border py-14">
          <SectionTitle>PAN &amp; Tax Registration Details</SectionTitle>
          <DetailCard>
            <Details rows={tax} />
          </DetailCard>
          <p className="mt-8 text-[14px] font-semibold text-primary">PAN Card Copy</p>
          <ImagePlaceholder
            label="PAN card copy"
            hint="PAN card image to come — send the scanned PAN card and it will be placed here."
          />
        </section>

        </div>
        
        <SiteFooter />
    </div>    

  );
}
