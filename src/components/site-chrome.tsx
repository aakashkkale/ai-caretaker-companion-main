import { Link } from "@tanstack/react-router";

export const wrap = "mx-auto w-full max-w-[1380px] px-6";
export const eyebrow = "text-[13px] font-semibold uppercase tracking-[0.08em]";
export const btnPrimary =
  "inline-flex items-center rounded-[3px] bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90";
export const btnOutline =
  "inline-flex items-center rounded-[3px] border border-primary bg-card px-4 py-2.5 text-sm font-semibold text-primary hover:bg-secondary";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs / Projects", to: "/programs" },
  { label: "Impact / Stories", to: "/impact" },
  { label: "Contact Us", to: "/contact" },
] as const;

const navCls = "text-foreground/80 hover:text-primary";
const activeCls = "font-semibold text-primary underline underline-offset-4";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-4 py-5`}>
        <Link to="/" className="leading-tight">
          <div className="font-display text-[17px] font-semibold text-primary">AAI CARETAKER</div>
          <div className="text-[13px] tracking-wide text-muted-foreground">TRUST · EST. 2009</div>
        </Link>
        <nav className="flex flex-wrap items-center gap-5 text-[14px]">
          {nav.map((n) =>
            "to" in n ? (
              <Link key={n.label} to={n.to} className={navCls} activeProps={{ className: activeCls }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ) : (
              <a key={n.label} href="#" className={navCls}>{n.label}</a>
            ),
          )}
          <Link to="/donate" className={btnPrimary}>Donate</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-sage">
      <div className={`${wrap} py-14 text-[13px] leading-relaxed text-foreground/85`}>
        <div className="grid gap-75 md:grid-cols-3">
          <div className="space-y-3">
            <div className="font-display text-lg font-medium text-primary">AAI CARETAKER TRUST</div>
            <p>Protecting and promoting education, environment and health. Chembur, Mumbai. Established 2009.</p>
            <p>Room No. B/4, Ashok Nagar, Near Reliance Substation, Vasinaka, Chembur, Mumbai - 400 074, Maharashtra, India.</p>
            <p>aaicaretaker.in</p>
          </div>
          <div>
            <div className="font-display text-base font-medium text-primary">Explore</div>
            <ul className="mt-2 space-y-1.5">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary">Programs / What We Do</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/donate" className="hover:text-primary">Donate</Link></li>
              <li><Link to="/impact" className="hover:text-primary">Impact / Stories</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-display text-base font-medium text-primary">Let’s connect</div>
            <p>aaicaretaker@gmail.com<br />+91 022 2553 0537<br />+91 9821 624480</p>
            <p><a href="https://www.facebook.com/aaicaretaker">Facebook</a> · <a href="https://x.com/aaicaretakerngo">Twitter</a></p>
          </div>
        </div>
        <div className="mt-10 space-y-8 border-t border-border pt-8">
          <p>Historical registration as shown: Reg. No. F 38629 &amp; Reg. No. MAH/Mum/855/09 GBBSD | 80G &amp; 12AA Reg No. 42990. Current registration and tax status must be verified; no current tax deduction eligibility is asserted.</p>
          <p>Representative photography is illustrative, not documentation of AAI beneficiaries or events. Contact details to be reconfirmed before launch.</p>
        </div>
      </div>
    </footer>
  );
}
