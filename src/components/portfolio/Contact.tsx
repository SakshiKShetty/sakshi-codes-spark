import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const body = encodeURIComponent(`Hi Sakshi,\n\n${fd.get("message")}\n\n— ${name} (${fd.get("email")})`);
    window.location.href = `mailto:sakshikshetty11@gmail.com?subject=Portfolio%20enquiry%20from%20${name}&body=${body}`;
    setSent(true);
  };
  return (
    <Section id="contact" eyebrow="06 — Contact" title="Let's build something together.">
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 space-y-4">
          <p className="text-muted-foreground">
            Open to internships, placements and collaboration. Drop a message — I usually reply within a day.
          </p>
          <div className="space-y-2">
            <a href="mailto:sakshikshetty11@gmail.com" className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/[0.06] transition group">
              <Mail size={18} className="text-accent" />
              <span className="text-sm group-hover:text-gradient transition">sakshikshetty11@gmail.com</span>
            </a>
            <a href="#" className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/[0.06] transition">
              <Linkedin size={18} className="text-accent" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-3 glass rounded-xl p-4 hover:bg-white/[0.06] transition">
              <Github size={18} className="text-accent" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" />
            <Field name="email" label="Email" type="email" />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              name="message" required rows={5}
              className="mt-2 w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition resize-none"
              placeholder="Tell me about your project or role…"
            />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition">
            {sent ? <><Check size={16} /> Opening your mail app…</> : <>Send message <Send size={16} /></>}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name} type={type} required
        className="mt-2 w-full bg-white/5 rounded-xl border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition"
      />
    </div>
  );
}
