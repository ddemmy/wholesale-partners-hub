import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground font-body">
          Global Wholesale & Distribution Solutions
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.05] tracking-tight mb-6">
          Scaling Supply.{" "}
          <span className="text-gradient">Powering Commerce.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Enterprise-grade wholesale distribution, bulk procurement, and resale infrastructure — built for businesses that move at scale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-8 py-6 font-heading font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 py-6 font-heading font-semibold border-border hover:bg-secondary"
            onClick={scrollToServices}
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
