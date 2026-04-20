import { useState } from "react";
import { getImageUrl } from "../../utils";
import { ThemeToggle } from "../ThemeToggle";
import { SoundToggle } from "../SoundToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { soundManager } from "@/lib/soundManager";

export const Navbar = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    soundManager.playClick();
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-dark/80 dark:bg-light/5 backdrop-blur-lg border-b border-light/10 dark:border-light/20 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl md:text-3xl font-bold gradient-text hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => soundManager.playHover()}
          >
            Tanmay
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-light dark:text-dark hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => soundManager.playHover()}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Theme & Sound Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SoundToggle />
            </motion.div>
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
              onClick={() => {
                soundManager.playClick();
                setMenuOpen(!menuOpen);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-light/10 dark:border-light/20 bg-dark/95 dark:bg-light/80 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="block px-4 py-2 text-light dark:text-dark hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
