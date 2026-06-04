import { useMemo, useState } from "react";
import { Section } from "./Section";
import { ExternalLink, Github, Briefcase, Brain, FileText, ChefHat, Shield, Flame } from "lucide-react";

type Project = {
  title: string; desc: string; stack: string[]; tags: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  live?: string; repo?: string;
};

const projects: Project[] = [
  { title: "DailyWage", desc: "Full-stack rural job portal enabling employers to post jobs and workers to discover opportunities.", stack: ["React", "Node.js", "Express", "MongoDB"], tags: ["Full Stack", "Web"], icon: Briefcase },
  { title: "AI-Powered Learning Platform", desc: "Personalized learning platform with AI-generated quizzes and adaptive content recommendations.", stack: ["React", "Node.js", "AI APIs"], tags: ["AI", "Full Stack"], icon: Brain },
  { title: "Resume Generator", desc: "Resume generation platform with automated template rendering and professional formatting.", stack: ["Go", "REST APIs", "JavaScript"], tags: ["Backend", "Web"], icon: FileText },
  { title: "ChefAI", desc: "AI-powered recipe assistant generating personalized recipes from user ingredients and preferences.", stack: ["React", "Node.js", "AI APIs"], tags: ["AI", "Full Stack"], icon: ChefHat },
  { title: "PhishNet", desc: "AI-powered phishing detection platform using intelligent analysis and risk assessment techniques.", stack: ["AI", "Cybersecurity", "Web"], tags: ["AI", "Security"], icon: Shield },
  { title: "Smart Gas Geyser Monitor", desc: "Intelligent monitoring system predicting gas geyser risks with safety alerts using sensor data.", stack: ["IoT", "AI", "Data Analysis"], tags: ["AI", "IoT"], icon: Flame },
];

const filters = ["All", "Full Stack", "AI", "Backend", "Security", "IoT"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => filter === "All" ? projects : projects.filter(p => p.tags.includes(filter)), [filter]);
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built.">
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-4 py-2 rounded-full border transition ${
              filter === f
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent"
                : "glass text-muted-foreground hover:text-foreground border-white/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {list.map((p) => (
          <article key={p.title} className="group relative glass rounded-3xl p-6 sm:p-7 overflow-hidden hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:glow-ring">
            <div aria-hidden className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <p.icon size={20} className="text-foreground" />
                </div>
                <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition">
                  {p.repo && <a href={p.repo} aria-label="GitHub" className="p-2 rounded-lg hover:bg-white/10 transition"><Github size={16} /></a>}
                  {p.live && <a href={p.live} aria-label="Live" className="p-2 rounded-lg hover:bg-white/10 transition"><ExternalLink size={16} /></a>}
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-gradient transition">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span key={s} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
