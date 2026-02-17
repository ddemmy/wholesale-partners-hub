import { Shield, Globe, Zap, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const points = [
  "Decades of combined industry experience",
  "Scalable infrastructure for any volume",
  "Global network of verified suppliers",
  "Dedicated account management",
];

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6 max-w-6xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Text */}
          <div>
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Trusted by industry leaders worldwide
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              With decades of combined experience in wholesale distribution, we've built an industry-leading platform that delivers reliable, scalable solutions for businesses of every size. Our global reach and trusted partnerships ensure you always have access to the products and services you need.
            </p>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 font-body">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative graphic */}
          <div className="relative">
            <div className="aspect-square rounded-2xl border border-border bg-card p-8 flex items-center justify-center bg-grid-pattern">
              <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
                {[Shield, Globe, Zap, Package].map((Icon, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-secondary/80 border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
                  >
                    <Icon className="h-8 w-8 text-primary/70" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/5 blur-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Need Package for the grid
import { Package } from "lucide-react";

export default About;
