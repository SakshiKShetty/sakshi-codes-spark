import { createFileRoute } from "@tanstack/react-router";
import { Nav, ScrollProgress } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakshi Shetty — Full Stack Developer & AI Enthusiast" },
      { name: "description", content: "Portfolio of Sakshi Shetty — CSE student (CGPA 9.8), Full Stack & Java developer building AI-powered web applications." },
      { property: "og:title", content: "Sakshi Shetty — Portfolio" },
      { property: "og:description", content: "Building intelligent web applications with Full Stack Development and AI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
