import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { GlassmorphicCard } from "../ui/GlassmorphicComponents";
import { itemVariants } from "@/lib/animations";
import { soundManager } from "@/lib/soundManager";

interface ProjectCardProps {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    skills: string[];
    demo: string;
    source: string;
  };
}

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <motion.div variants={itemVariants}>
      <GlassmorphicCard className="overflow-hidden h-full flex flex-col">
        {/* Image Container */}
        <motion.div 
          className="relative h-48 md:h-56 overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/80"></div>
        </motion.div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <motion.h3 
            className="text-xl font-bold text-light dark:text-dark mb-2 group-hover:text-primary transition-colors"
            whileHover={{ x: 5 }}
            onMouseEnter={() => soundManager.playHover()}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-light/70 dark:text-dark/70 text-sm mb-4 flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>

          {/* Skills Tags */}
          <motion.div 
            className="mb-6 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, id) => (
              <motion.span
                key={id}
                className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30 hover:border-primary/60 transition-colors"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => soundManager.playHover()}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-light/10 dark:border-dark/10">
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-primary/20 text-primary text-center text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
            >
              Live Demo
            </motion.a>
            <motion.a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-accent/20 text-accent text-center text-sm font-semibold rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => soundManager.playClick()}
            >
              Source Code
            </motion.a>
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  );
};
