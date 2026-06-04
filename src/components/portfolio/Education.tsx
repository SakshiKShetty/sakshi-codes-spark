import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  { title: "B.E. Computer Science Engineering", meta: "CGPA: 9.8", period: "Present" },
  { title: "Pre-University Course (PUC)", meta: "96%", period: "—" },
  { title: "SSLC", meta: "97%", period: "—" },
];

export function Education() {
  return (
    <Section id="education" eyebrow="04 — Education" title="The academic trail.">
      <ol className="relative border-l border-white/10 ml-3 space-y-8">
        {items.map((it) => (
          <li key={it.title} className="pl-8 relative">
            <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ring-4 ring-background">
              <GraduationCap size={12} className="text-primary-foreground" />
            </span>
            <div className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-lg">{it.title}</h3>
                <span className="text-xs font-mono text-muted-foreground">{it.period}</span>
              </div>
              <p className="text-sm text-accent mt-1">{it.meta}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
