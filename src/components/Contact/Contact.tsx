import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { GlassmorphicCard, GradientMesh } from "../ui/GlassmorphicComponents";
import { containerVariants, itemVariants } from "@/lib/animations";
import { soundManager } from "@/lib/soundManager";

export const Contact = (): JSX.Element => {
  const contactLinks = [
    {
      icon: "contact/emailIcon.png",
      label: "Email",
      value: "tnmsinha65@gmail.com",
      href: "mailto:tnmsinha65@email.com",
    },
    {
      icon: "contact/linkedinIcon.png",
      label: "LinkedIn",
      value: "linkedin.com/in/tanmay-sinha",
      href: "https://www.linkedin.com/in/tanmay-sinha-2ba095215/",
    },
  ];

  return (
    <footer id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 dark:bg-light/5 border-t border-light/10 dark:border-light/20 overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <GradientMesh className="dark" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-light dark:text-dark mb-4"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-light/60 dark:text-dark/60 text-lg mb-8"
            variants={itemVariants}
          >
            Feel free to reach out. I'm always interested in hearing about new projects.
          </motion.p>
        </motion.div>

        {/* Contact Links */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactLinks.map((contact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => soundManager.playHover()}
            >
              <motion.a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
              >
                <GlassmorphicCard className="p-6 flex items-center gap-4">
                  <motion.div 
                    className="p-4 bg-primary/30 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img
                      src={getImageUrl(contact.icon)}
                      alt={contact.label}
                      className="w-6 h-6"
                    />
                  </motion.div>
                  <div>
                    <p className="text-sm text-light/60 dark:text-dark/60 font-medium">{contact.label}</p>
                    <p className="text-light dark:text-dark font-semibold hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </GlassmorphicCard>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-light/10 dark:border-light/20 my-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Footer Text */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p 
            className="text-light/50 dark:text-dark/50 mb-4"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Tanmay Sinha. All rights reserved.
          </motion.p>
          <motion.p 
            className="text-light/40 dark:text-dark/40 text-sm"
            variants={itemVariants}
          >
            Designed & Built with React, TypeScript, Tailwind CSS & Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};
