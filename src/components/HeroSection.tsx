import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-40"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

    <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="badge-price mb-6 inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" /> Student-Powered Innovation
        </span>
      </motion.div>

      <motion.h1
        className="mb-6 font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Your Hub for{" "}
        <span className="text-gradient">Elite Campus Talent</span>
      </motion.h1>

      <motion.p
        className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Premium design, development & AI services crafted by top-tier university talent. Quality you'd expect from agencies, at prices that make sense.
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <Button size="lg" className="gap-2 text-base" asChild>
          <a href="#services">
            Browse Services <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="gap-2 text-base" asChild>
          <a href="#about">Meet the Founder</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
