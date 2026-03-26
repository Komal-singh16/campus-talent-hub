import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Java", icon: "☕" },
  { name: "Figma", icon: "🎨" },
  { name: "Tailwind CSS", icon: "🎐" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "TypeScript", icon: "📘" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
];

const TrustBar = () => (
  <section className="section-padding border-t border-border/50">
    <div className="mx-auto max-w-7xl">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
          Featured <span className="text-gradient">Skills</span>
        </h3>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            className="bento-card flex items-center gap-3 !px-5 !py-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <span className="text-xl">{s.icon}</span>
            <span className="text-sm font-medium text-foreground">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
