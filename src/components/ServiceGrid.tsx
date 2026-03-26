import { motion } from "framer-motion";
import { Palette, Code2, Brain, PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces with intuitive user flows. From wireframes to high-fidelity prototypes in Figma.",
    price: "₹999",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Dev",
    description: "Scalable applications built with React, Spring Boot & modern cloud infrastructure.",
    price: "₹999",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom ML models, chatbots & intelligent automation tailored to your business needs.",
    price: "₹999",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    description: "Data-driven content creation, SEO optimization & brand storytelling that converts.",
    price: "₹999",
  },
];

const ServiceGrid = () => (
  <section id="services" className="section-padding">
    <div className="mx-auto max-w-7xl">
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge-price mb-4 inline-block">What We Offer</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
          Services That <span className="text-gradient">Ship Results</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="bento-card group h-full cursor-pointer border-border bg-transparent">
              <CardHeader className="pb-3">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <s.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-display text-lg text-foreground">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <span className="badge-price">Starting at {s.price}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceGrid;
