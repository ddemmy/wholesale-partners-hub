import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Their distribution network completely transformed our supply chain. We've reduced lead times by 40% while scaling to new markets.",
    name: "Sarah M.",
    title: "Director of Procurement, Fortune 500 Company",
  },
  {
    quote: "The bulk procurement program gave us pricing leverage we couldn't achieve alone. A true strategic partner for growth.",
    name: "James K.",
    title: "VP of Operations, Global Retail Group",
  },
  {
    quote: "From onboarding to fulfillment, their resale solutions are seamless. It's rare to find this level of reliability at scale.",
    name: "Linda R.",
    title: "Head of Supply Chain, National Distributor",
  },
];

const Testimonials = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-secondary/20">
      <div ref={ref} className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">What Our Partners Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-xl border border-border bg-card transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-foreground/90 font-body leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs font-body">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
