import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import education from "@/assets/education.jpg";
import environment from "@/assets/environment.jpg";
import health from "@/assets/health.jpg";
import lane from "@/assets/lane.jpg";
import { SiteHeader, SiteFooter, wrap, eyebrow, btnPrimary, btnOutline } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAI Caretaker Trust — Care for people, care for our shared future" },
      {
        name: "description",
        content:
          "Community non-profit in Chembur, Mumbai protecting and promoting education, environment and health since 2009.",
      },
    ],
  }),
  component: Index,
});


const areas = [
  { title: "Education", img: education, text: "Making education a shared priority. A founding focus of the trust’s work.", link: "Explore education" },
  { title: "Environment", img: environment, text: "A mandate to protect and promote the environment we share.", link: "Explore environment" },
  { title: "Health", img: health, text: "Keeping care for people at the heart of our community purpose.", link: "Explore health" },
];

const ideas = [
  { tag: "Environment / Education", title: "A solar proposal for shared spaces", text: "The proposal lists a Free Solar Project to School, College & Hospital under CSR Activities." },
  { tag: "Health", title: "A cancer-centre support proposal", text: "The proposal lists Cancer Centre (Food & Accommodation Free for Patients)." },
];

function Index() {
  const [agree, setAgree] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className={`${wrap} grid items-start gap-12 py-16 md:grid-cols-2 md:py-[70px]`}>
        <div className="pt-6">
          <p className={`${eyebrow} text-primary`}>Rooted in Chembur. Open to care.</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-primary md:text-[52px]">
            Care for people.<br />Care for our<br />shared future.
          </h1>
          <p className="mt-6 max-w-[470px] text-[17px] leading-relaxed text-muted-foreground">
            AAI Caretaker is a community non-profit in Mumbai, protecting and promoting education, environment and health since 2009.
          </p>
          <div className="mt-6 flex gap-2.5">
            <a href="#" className={btnPrimary}>Donate</a>
            <a href="#" className={btnOutline}>Get involved →</a>
          </div>
          <p className="mt-7 text-[13px] text-foreground">A mother’s care. A guardian’s purpose.</p>
        </div>
        <figure>
          <img src={hero} alt="Three women talking at a table in a Chembur courtyard" className="aspect-[95/63] w-full rounded-md object-cover" />
          <figcaption className="mt-4 text-[13px] text-muted-foreground">The spirit of care, shared. Illustrative photograph.</figcaption>
        </figure>
      </section>

      <section className="bg-sage">
        <div className={`${wrap} grid gap-8 py-10 sm:grid-cols-3`}>
          {[["Since 2009", "Established in Mumbai"], ["3 focus areas", "Education, environment, health"], ["Chembur, Mumbai", "Rooted in the community"]].map(([a, b]) => (
            <div key={a}>
              <div className="font-display text-2xl font-semibold text-primary">{a}</div>
              <div className="mt-2 text-[13px] text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${wrap} py-20`}>
        <p className={`${eyebrow} text-primary`}>What we do</p>
        <h2 className="mt-5 text-4xl font-semibold leading-[1.2] text-primary">Three connected areas.<br />One spirit of care.</h2>
        <p className="mt-6 text-[15px] text-muted-foreground">Education, environment and health shape AAI Caretaker’s founding mandate.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {areas.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-md bg-card">
              <img src={a.img} alt={a.title} loading="lazy" className="aspect-[330/220] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-[22px] font-medium text-primary">{a.title}</h3>
                <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{a.text}</p>
                <a href="#" className="mt-4 inline-block text-[13px] font-semibold text-primary">{a.link} →</a>
              </div>
            </article>
          ))}
        </div>
        <a href="#" className={`${btnOutline} mt-8 text-[13px]`}>Explore all programs →</a>
      </section>

      <section className="bg-forest text-primary-foreground">
        <div className={`${wrap} grid items-start gap-12 py-16 md:grid-cols-2`}>
          <figure>
            <img src={lane} alt="A leafy lane in Chembur" loading="lazy" className="aspect-[490/366] w-full rounded-md object-cover" />
            <figcaption className="mt-4 text-[13px] text-primary-foreground/85">A sense of place. Illustrative photograph.</figcaption>
          </figure>
          <div className="pt-5">
            <p className={`${eyebrow} text-gold`}>The story behind our name</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.2]">Care begins<br />close to home.</h2>
            <p className="mt-6 text-[15px] leading-relaxed text-primary-foreground/85">
              AAI is Marathi for ‘Mother’. Caretaker means ‘Guardian’. Together, they capture the spirit of a mother caring for the universe.
            </p>
            <a href="#" className="mt-6 inline-flex rounded-[3px] border border-primary-foreground/70 px-4 py-2.5 text-[13px] font-semibold hover:bg-primary-foreground/10">Meet AAI Caretaker →</a>
          </div>
        </div>
      </section>

      <section className={`${wrap} py-16`}>
        <h2 className="text-4xl font-semibold text-primary">Ideas for the road ahead.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {ideas.map((i) => (
            <article key={i.title} className="rounded-md border border-border bg-card p-7">
              <p className={`${eyebrow} text-primary`}>{i.tag}</p>
              <h3 className="mt-4 text-2xl font-semibold text-primary">{i.title}</h3>
              <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{i.text}</p>
              <div className="mt-5 bg-secondary px-2.5 py-1.5 text-[13px] text-muted-foreground">Proposed initiative · Dates to confirm</div>
              <a href="#" className="mt-5 inline-block text-[13px] font-semibold text-primary">Ask about this proposal ↗</a>
            </article>
          ))}
        </div>
        <a href="#" className="mt-9 inline-block text-[13px] font-semibold text-primary">Explore stories and project information →</a>
        <div className="mt-5 rounded-md border-l-4 border-gold bg-secondary px-6 py-5 text-[14px] leading-relaxed text-foreground">
          <span className="font-semibold">Official Website Notice:</span> Our official web site is www.aaicaretaker.in. (Please note that the previous website www.aaicaretaker.org.in is no longer active).
        </div>
      </section>

      <section className="bg-forest text-primary-foreground">
        <div className={`${wrap} grid gap-12 py-20 md:grid-cols-2`}>
          <div>
            <p className={`${eyebrow} text-gold`}>Make room for care</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.2]">Your time. Your skills. A place to begin.</h2>
            <p className="mt-6 text-[13px] leading-relaxed text-primary-foreground/85">Tell us what you care about. Ask about volunteering in education, environment or health.</p>
            <a href="#" className="mt-6 inline-flex rounded-[3px] bg-gold px-4 py-2.5 text-[13px] font-semibold text-forest">Get involved →</a>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-medium">Stay connected</h3>
            <p className="mt-4 text-[13px] text-primary-foreground/85">Register interest in email updates. Newsletter availability is to confirm.</p>
            <label htmlFor="email" className="mt-4 block text-[13px] font-semibold">Email address</label>
            <input id="email" type="email" required placeholder="you@example.com" className="mt-2 w-full rounded-[3px] bg-card px-3 py-3 text-[13px] text-foreground outline-hidden" />
            <label className="mt-4 flex items-center gap-2.5 text-[13px] text-primary-foreground/85">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="size-4 accent-gold" />
              I agree to be contacted about AAI Caretaker updates.
            </label>
            <button type="submit" className="mt-4 rounded-[3px] bg-gold px-4 py-2.5 text-[13px] font-semibold text-forest">Register interest</button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
