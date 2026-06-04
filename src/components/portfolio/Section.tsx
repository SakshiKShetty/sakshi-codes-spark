import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children, className = "" }: {
  id?: string; eyebrow?: string; title?: string; children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {(eyebrow || title) && (
          <div className="mb-12 sm:mb-16">
            {eyebrow && (
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-5xl font-bold">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
