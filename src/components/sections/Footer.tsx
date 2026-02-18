import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 bg-card/50">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="font-heading font-bold text-2xl tracking-tight mb-3">
            <span className="text-gradient">D</span>emmy
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm">
            Enterprise wholesale distribution and bulk procurement solutions. Powering commerce across industries since 2009.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-muted-foreground">Company</h4>
          <ul className="space-y-2 font-body text-sm">
            {["About", "Careers", "Press", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-muted-foreground">Legal</h4>
          <ul className="space-y-2 font-body text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"].map((link) => (
              <li key={link}>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Demmy. All rights reserved. | 2764 Pleasant Road Suite A #10411
        </p>
        <div className="flex gap-4">
          {[Twitter, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
