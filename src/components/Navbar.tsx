import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Services", "About", "Team", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <span className="font-display text-xl font-bold tracking-wide text-foreground">
        NEXUS<span className="text-primary">.</span>
      </span>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 font-body text-sm tracking-wide">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollTo(item)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo("contact")}
        className="hidden md:block px-5 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Get in Touch
      </button>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-left text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
