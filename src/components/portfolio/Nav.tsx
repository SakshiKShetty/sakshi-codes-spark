import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <nav className={`glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between ${scrolled ? "glow-ring" : ""}`}>
          <Link to="/" className="font-display font-bold tracking-tight text-lg">
            <span className="text-gradient">Sakshi</span>
            <span className="text-foreground/60">.dev</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <Link to="/resume" className="text-muted-foreground hover:text-foreground transition-colors">Resume</Link>
            <a href="#contact" className="rounded-full px-4 py-1.5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition">
              Let's talk
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">{l.label}</a>
            ))}
            <Link to="/resume" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">Resume</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
      <div className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-[width] duration-150" style={{ width: `${p}%` }} />
    </div>
  );
}
