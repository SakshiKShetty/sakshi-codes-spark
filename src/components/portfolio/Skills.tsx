import { Section } from "./Section";
import { Code, Layout, Server, Database, BookOpen, Wrench, Sparkles } from "lucide-react";

const groups = [
  { icon: Code, title: "Languages", items: ["Java", "JavaScript", "TypeScript", "Go", "C"] },
  { icon: Layout, title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Responsive Web Design"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { icon: Database, title: "Database", items: ["SQL", "MongoDB", "Supabase"] },
  { icon: BookOpen, title: "CS Fundamentals", items: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"] },
  { icon: Wrench, title: "Tools & Platforms", items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman", "Netlify"] },
  { icon: Sparkles, title: "AI & Other", items: ["Prompt Engineering", "AI App Development", "Auth & Authorization", "Full Stack Web Dev"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="The stack I build with.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="group relative glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-opacity opacity-0 group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <g.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map(s => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
