import { motion } from "framer-motion";
import { Award, Rocket, GraduationCap } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";

const stats = [
  { icon: GraduationCap, label: "MCA @ GL Bajaj" },
  { icon: Rocket, label: "Hackathon Leader" },
  { icon: Award, label: "Full-Stack + Design" },
];

const FounderSpotlight = () => (
  <section id="about" className="section-padding">
    <div className="mx-auto max-w-7xl">
      <motion.div
        className="mb-14 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge-price mb-4 inline-block">Founder's Spotlight</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
          The Mind <span className="text-gradient">Behind It All</span>
        </h2>
      </motion.div>

      <div className="grid items-center gap-12 md:grid-cols-5">
        <motion.div
          className="flex justify-center md:col-span-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10 blur-lg" />
            <img
              src={founderPhoto}
              alt="Founder"
              className="relative h-72 w-72 rounded-2xl object-cover shadow-2xl md:h-80 md:w-80"
              loading="lazy"
              width={512}
              height={512}
            />
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            I am an MCA student at GL Bajaj with a passion for building scalable, AI-driven solutions. With a background in Graphic Design and experience leading hackathon teams, I specialize in bridging the gap between complex backend logic and intuitive UI/UX.
          </p>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Currently focused on mastering <span className="font-semibold text-primary">Spring Boot</span> and <span className="font-semibold text-primary">DSA</span> to build the next generation of web applications. Core expertise in <span className="font-semibold text-foreground">Java, Spring Boot, and UI Design</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bento-card flex items-center gap-3 !p-4">
                <s.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FounderSpotlight;
