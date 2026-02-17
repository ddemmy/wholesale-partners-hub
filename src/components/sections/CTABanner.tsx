import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
        Ready to <span className="text-gradient">Scale Your Business?</span>
      </h2>
      <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-10">
        Join hundreds of partners who trust us to power their wholesale and distribution operations. Let's build something at scale.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="text-base px-8 py-6 font-heading font-semibold glow-border">
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline" className="text-base px-8 py-6 font-heading font-semibold border-border hover:bg-secondary">
          Request a Quote
        </Button>
      </div>
    </div>
  </section>
);

export default CTABanner;
