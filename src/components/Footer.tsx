const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold text-foreground">
          NEXUS<span className="text-primary">.</span>
        </span>
        <p className="text-muted-foreground text-sm">
          © 2026 Nexus Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
