import { Section } from "./Section";
import { GraduationCap, Code2, Brain, Rocket } from "lucide-react";
import { Counter } from "./Counter";

const highlights = [
  { icon: GraduationCap, label: "CGPA", value: 9.8, suffix: "/10" },
  { icon: Code2, label: "Projects shipped", value: 6, suffix: "+" },
  { icon: Brain, label: "AI projects", value: 4, suffix: "" },
  { icon: Rocket, label: "Years coding", value: 3, suffix: "+" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A builder who loves shipping real things.">
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground font-medium">Computer Science Engineering</span> student
            with a <span className="text-gradient font-semibold">CGPA of 9.8</span>, passionate about Full Stack
            Development, Java, and Artificial Intelligence.
          </p>
          <p>
            My goal is to become a professional Full Stack Developer and contribute to impactful products
            that solve real-world problems. I enjoy developing AI-powered applications, modern web platforms,
            and scalable software systems.
          </p>
          <p>
            Whether it's a rural job portal, an AI tutor, or a phishing detector — I love taking ideas
            from a blank canvas to a shipped product.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          {highlights.map(h => (
            <div key={h.label} className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition">
              <h.icon size={20} className="text-accent mb-3" />
              <div className="text-3xl font-bold font-display">
                <Counter to={h.value} />{h.suffix}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
