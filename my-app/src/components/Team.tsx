"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Sarah Chen", role: "Creative Director", initials: "SC" },
  { name: "Marcus Rivera", role: "Lead Developer", initials: "MR" },
  { name: "Amara Johnson", role: "Strategy Lead", initials: "AJ" },
  { name: "David Kim", role: "Design Lead", initials: "DK" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">Our Team</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            The people behind <span className="text-gradient">Nexus</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-colors duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <span className="font-display text-xl font-bold text-primary">{member.initials}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
