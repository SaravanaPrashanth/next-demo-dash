"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "35", label: "Team Members" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              We build brands that <span className="text-gradient">matter</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nexus is a full-service creative agency based in New York. We partner with ambitious brands to create meaningful digital experiences that drive growth and leave lasting impressions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our multidisciplinary team blends strategy, design, and technology to deliver work that performs as beautifully as it looks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
