import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "We craft brand identities that resonate with your audience and stand the test of time.",
  },
  {
    icon: PenTool,
    title: "Creative Design",
    description: "From logos to full campaigns, our designs tell your story with visual impact.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Performant, accessible, and beautifully engineered digital experiences.",
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    description: "Data-driven strategies that turn visitors into loyal customers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Services that drive <span className="text-gradient">results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 hover:border-primary/30 transition-colors duration-500 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
