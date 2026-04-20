import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { GlassmorphicCard, GradientMesh } from "../ui/GlassmorphicComponents";
import { containerVariants, itemVariants } from "@/lib/animations";
import { soundManager } from "@/lib/soundManager";

export const About = (): JSX.Element => {
  const skills = [
    {
      icon: "about/cursorIcon.png",
      title: "Frontend Developer",
      description:
        "I am a frontend developer with experience in building responsive and optimized sites with modern frameworks",
    },
    {
      icon: "about/serverIcon.png",
      title: "Backend Developer",
      description:
        "I have experience developing fast and optimised back-end systems, APIs, and databases",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <GradientMesh className="dark" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-light/60 dark:text-dark/60 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Get to know me and my skills
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <img
                src={getImageUrl("hero/aboutPic.jpeg")}
                alt="About me"
                className="relative w-full h-full object-cover rounded-2xl border border-primary/30 shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => soundManager.playHover()}
              >
                <GlassmorphicCard className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-primary/20 rounded-lg flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <img
                        src={getImageUrl(skill.icon)}
                        alt={skill.title}
                        className="w-8 h-8"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-light dark:text-dark mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-light/70 dark:text-dark/70">{skill.description}</p>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
