import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 px-4 py-10 text-center md:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-4 flex items-center justify-center gap-2 font-display text-lg font-bold text-foreground">
        <Zap className="h-5 w-5 text-primary" />
        CampusCreative
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} CampusCreative. Built with passion by campus talent.
      </p>
    </div>
  </footer>
);

export default Footer;
