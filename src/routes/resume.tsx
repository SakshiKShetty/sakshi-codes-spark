import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, FileText, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Nav, ScrollProgress } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume & CV — Sakshi Shetty" },
      { name: "description", content: "Preview and download Sakshi Shetty's resume and CV." },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

const docs = {
  resume: { label: "Resume", file: "/resume.pdf" },
  cv: { label: "CV", file: "/cv.pdf" },
};

function ResumePage() {
  const [active, setActive] = useState<"resume" | "cv">("resume");
  const doc = docs[active];
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
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Documents</div>
            <h1 className="text-4xl sm:text-5xl font-bold">Resume & CV</h1>
            <p className="text-muted-foreground mt-2">Preview inline or download a PDF copy.</p>
          </div>
          <div className="flex items-center gap-2">
            {(Object.keys(docs) as Array<"resume" | "cv">).map(k => (
              <button
                key={k}
                onClick={() => setActive(k)}
                className={`text-sm px-4 py-2 rounded-full transition ${
                  active === k
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {docs[k].label}
              </button>
            ))}
            <a href={doc.file} download className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full glass hover:bg-white/10 transition">
              <Download size={14} /> Download
            </a>
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-2 overflow-hidden glow-ring">
          <object data={doc.file} type="application/pdf" className="w-full h-[80vh] rounded-2xl bg-black/30">
            <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-4">
                <FileText size={22} className="text-accent" />
              </div>
              <h2 className="text-xl font-display font-semibold mb-2">{doc.label} preview unavailable</h2>
              <p className="text-sm text-muted-foreground mb-5 max-w-md">
                Drop your <code className="font-mono text-foreground">{doc.file}</code> into the project's <code className="font-mono text-foreground">public/</code> folder to enable inline preview.
              </p>
              <a href={doc.file} download className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <Download size={14} /> Download {doc.label}
              </a>
            </div>
          </object>
        </div>
      </section>
      <Footer />
    </main>
  );
}
