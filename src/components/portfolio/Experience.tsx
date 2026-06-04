import { Section } from "./Section";
import { Award, BadgeCheck } from "lucide-react";

const certs = [
  "Full Stack Development",
  "Node.js",
  "Data Science & Math Skills",
  "Microsoft Excel",
  "MATLAB Onramp",
  "NPTEL Privacy and Security in Online Social Media",
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="05 — Experience & Certifications" title="Learning by doing.">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="glass rounded-3xl p-7 hover:bg-white/[0.06] transition">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <Award size={18} className="text-accent" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Internship</span>
          </div>
          <h3 className="text-xl font-display font-semibold mb-2">Generative AI Virtual Internship</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Completed training on LLMs, Prompt Engineering, and AI Application Development —
            building hands-on skills for production AI products.
          </p>
        </div>

        <div className="glass rounded-3xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <BadgeCheck size={18} className="text-accent" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Certifications</span>
          </div>
          <ul className="space-y-2">
            {certs.map(c => (
              <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                <BadgeCheck size={14} className="text-accent mt-0.5 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
