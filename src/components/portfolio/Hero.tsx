import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div aria-hidden className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div aria-hidden className="absolute top-40 -right-32 w-[520px] h-[520px] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-6xl px-4 w-full">
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for internships & placements
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            <span className="block text-foreground/90">Hi, I'm</span>
            <span className="block text-gradient">Sakshi Shetty.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            <span className="text-foreground font-medium">Full Stack Developer</span>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground font-medium">Java Developer</span>
            <span className="mx-2 text-foreground/30">/</span>
            <span className="text-foreground font-medium">AI Enthusiast</span>
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Building intelligent web applications with Full Stack Development and AI —
            shipping clean, scalable software that solves real-world problems.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/20">
              View Projects <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" />
            </a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full px-5 py-3 glass hover:bg-white/10 transition font-medium">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 glass hover:bg-white/10 transition font-medium">
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4 text-muted-foreground">
            <a href="mailto:sakshikshetty11@gmail.com" aria-label="Email" className="hover:text-foreground transition"><Mail size={18} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin size={18} /></a>
            <span className="text-xs flex items-center gap-1.5"><Sparkles size={12} className="text-accent" /> CGPA 9.8 · CSE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
