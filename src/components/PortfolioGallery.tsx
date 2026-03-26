import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  { img: p1, title: "Analytics Dashboard", tag: "Web Dev" },
  { img: p2, title: "AI Chat Interface", tag: "AI Solutions" },
  { img: p3, title: "Mobile App UI", tag: "UI/UX Design" },
  { img: p4, title: "Spring Boot API", tag: "Backend" },
  { img: p5, title: "CMS Platform", tag: "Full-Stack" },
  { img: p6, title: "Fitness Tracker", tag: "Web Dev" },
];

const PortfolioGallery = () => (
  <section id="portfolio" className="section-padding">
    <div className="mx-auto max-w-7xl">
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge-price mb-4 inline-block">Portfolio</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
          Recent <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="bento-card group cursor-pointer overflow-hidden !p-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/20">
                <ExternalLink className="h-8 w-8 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
            <div className="p-5">
              <span className="badge-price mb-2 inline-block text-[10px]">{p.tag}</span>
              <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioGallery;
