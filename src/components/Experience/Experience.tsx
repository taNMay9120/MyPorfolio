import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { motion } from "framer-motion";
import { GradientMesh, GlassmorphicCard } from "../ui/GlassmorphicComponents";
import { containerVariants, itemVariants } from "@/lib/animations";
import { soundManager } from "@/lib/soundManager";

interface Skill {
  title: string;
  imageSrc: string;
}

interface HistoryItem {
  organisation: string;
  role: string;
  imageSrc: string;
  startDate: string;
  endDate: string;
  experiences: string[];
}

export const Experience = (): JSX.Element => {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Experience
          </motion.h2>
          <motion.p 
            className="text-light/60 dark:text-dark/60 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Skills and professional background
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="mb-20">
          <motion.h3 
            className="text-2xl font-bold text-light dark:text-dark mb-8 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {(skills as Skill[]).map((skill, id) => (
              <motion.div
                key={id}
                variants={itemVariants}
                onMouseEnter={() => soundManager.playHover()}
              >
                <GlassmorphicCard className="p-4 flex flex-col items-center justify-center text-center h-full">
                  <motion.div 
                    className="p-3 bg-primary/20 rounded-lg mb-3"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                      className="w-10 h-10"
                    />
                  </motion.div>
                  <p className="text-sm font-semibold text-light dark:text-dark">
                    {skill.title}
                  </p>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Work History */}
        <motion.div>
          <motion.h3 
            className="text-2xl font-bold text-light dark:text-dark mb-8 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h3>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {(history as HistoryItem[]).map((item, id) => (
              <motion.div
                key={id}
                variants={itemVariants}
                onMouseEnter={() => soundManager.playHover()}
              >
                <GlassmorphicCard className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={getImageUrl(item.imageSrc)}
                        alt={item.organisation}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border border-primary/30"
                      />
                    </motion.div>
                    <div className="flex-grow">
                      <div className="mb-3">
                        <motion.h4 
                          className="text-xl font-bold text-light dark:text-dark"
                          whileHover={{ x: 5 }}
                        >
                          {item.role}
                        </motion.h4>
                        <p className="text-primary font-semibold">
                          {item.organisation}
                        </p>
                        <p className="text-light/50 dark:text-dark/50 text-sm mt-1">
                          {item.startDate} - {item.endDate}
                        </p>
                      </div>
                      <motion.ul 
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {item.experiences.map((experience, idx) => (
                          <motion.li 
                            key={idx} 
                            className="text-light/80 dark:text-dark/80 flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-primary mt-1">▸</span>
                            <span>{experience}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
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
