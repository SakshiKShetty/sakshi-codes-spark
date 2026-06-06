import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ArrowLeft } from "lucide-react";
import { Nav, ScrollProgress } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Sakshi Shetty" },
      { name: "description", content: "Preview and download Sakshi Shetty's resume." },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="relative min-h-screen">
      <ScrollProgress />
      <Nav />
      <section className="pt-32 pb-20 mx-auto max-w-6xl px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-6">
          <ArrowLeft size={14} /> Back home
        </Link>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Document</div>
            <h1 className="text-4xl sm:text-5xl font-bold">Resume</h1>
            <p className="text-muted-foreground mt-2">Preview inline or download a PDF copy.</p>
          </div>
          <a
            href={resumeAsset.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition"
          >
            <Download size={14} /> Download Resume
          </a>
        </div>

        <div className="glass-strong rounded-3xl p-2 overflow-hidden glow-ring">
          <iframe
            src={resumeAsset.url}
            title="Sakshi Shetty Resume"
            className="w-full h-[80vh] rounded-2xl bg-black/30"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
