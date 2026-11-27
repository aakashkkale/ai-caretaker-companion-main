import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact, contactSchema } from "@/lib/contact.functions";

const field =
  "mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-[15px] text-foreground outline-hidden focus:border-primary";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setErr(null);
    setStatus("sending");
    try {
      const res = await send({ data: parsed.data });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="mt-6 rounded-md bg-secondary px-5 py-4 text-[15px] text-primary">
        Thank you — your message has been sent.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid max-w-[820px] gap-5 md:grid-cols-2" noValidate>
      <label className="text-[14px] font-semibold text-primary">
        Name
        <input name="name" className={field} maxLength={100} required />
      </label>
      <label className="text-[14px] font-semibold text-primary">
        Email
        <input name="email" type="email" className={field} maxLength={255} required />
      </label>
      <label className="text-[14px] font-semibold text-primary md:col-span-2">
        Phone (optional)
        <input name="phone" type="tel" className={field} maxLength={30} />
      </label>
      <label className="text-[14px] font-semibold text-primary md:col-span-2">
        Message
        <textarea name="message" rows={5} className={field} maxLength={2000} required />
      </label>
      {(err || status === "error") && (
        <p className="text-[14px] text-destructive md:col-span-2">
          {err ?? "Something went wrong. Please try again."}
        </p>
      )}
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-md bg-primary px-7 py-3 text-[15px] font-semibold text-primary-foreground disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
