import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's create something <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Ready to elevate your brand? Get in touch and let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <span>hello@nexusagency.com</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-5 h-5 text-primary" />
            <span>+1 (555) 234-5678</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>New York, NY</span>
          </div>
        </motion.div>

        <motion.a
          href="mailto:hello@nexusagency.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity text-lg"
        >
          Start a Project
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
