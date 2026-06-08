import { Section } from "./Section";
import { ExternalLink, Github, Briefcase, Brain, FileText, ChefHat } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  stack: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "DailyWage",
    desc: "Full-stack rural job portal enabling employers to post jobs and workers to discover opportunities.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    icon: Briefcase,
    repo: "https://github.com/lucienfolter/Lucky7",
  },
  {
    title: "AI Generated Project",
    desc: "AI-powered browser extension that enhances productivity with smart, context-aware suggestions.",
    stack: ["JavaScript", "Browser Extension", "AI APIs"],
    icon: Brain,
    repo: "https://github.com/Peng-uinni/etp-project",
  },
  {
    title: "ChefAI",
    desc: "AI-powered recipe assistant generating personalized recipes from user ingredients and preferences.",
    stack: ["React", "Node.js", "AI APIs"],
    icon: ChefHat,
    repo: "https://github.com/SakshiKShetty/ChefAI",
  },
  {
    title: "Resume Generator",
    desc: "Resume generation platform with automated template rendering and professional formatting.",
    stack: ["Go", "REST APIs", "JavaScript"],
    icon: FileText,
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built.">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => {
          const Wrapper: any = p.repo ? "a" : "div";
          const wrapperProps = p.repo
            ? { href: p.repo, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={p.title}
              {...wrapperProps}
              className={`group relative glass rounded-3xl p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:glow-ring hover:bg-white/[0.06] block ${p.repo ? "cursor-pointer" : ""}`}
            >
              <div aria-hidden className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <p.icon size={20} className="text-foreground" />
                  </div>
                  {p.repo && (
                    <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition">
                      <span aria-label="GitHub" className="p-2 rounded-lg bg-white/5">
                        <Github size={16} />
                      </span>
                      <span aria-label="Open" className="p-2 rounded-lg bg-white/5">
                        <ExternalLink size={16} />
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-gradient transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(s => (
                    <span key={s} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">{s}</span>
                  ))}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}
