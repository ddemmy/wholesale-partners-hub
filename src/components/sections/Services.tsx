import { Package, ShoppingCart, Repeat, Truck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Package,
    title: "Wholesale Distribution",
    description: "End-to-end product sourcing at scale. We connect manufacturers directly to your supply chain with unmatched efficiency.",
  },
  {
    icon: ShoppingCart,
    title: "Bulk Procurement",
    description: "Volume-driven pricing for enterprise buyers. Leverage our network to secure competitive rates across categories.",
  },
  {
    icon: Repeat,
    title: "Resale Solutions",
    description: "Turnkey programs for authorized resellers. From onboarding to fulfillment, we handle the complexity.",
  },
  {
    icon: Truck,
    title: "Logistics & Fulfillment",
    description: "Streamlined supply chain management with real-time visibility, warehousing, and last-mile delivery coordination.",
  },
];

const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Comprehensive Supply Chain Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:glow-border transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
