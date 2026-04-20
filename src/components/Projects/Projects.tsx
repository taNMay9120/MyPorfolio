import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { GradientMesh } from "../ui/GlassmorphicComponents";
import { containerVariants, itemVariants } from "@/lib/animations";
import { soundManager } from "@/lib/soundManager";

interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
}

export const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Projects
          </motion.h2>
          <motion.p 
            className="text-light/60 dark:text-dark/60 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore some of my recent and featured projects
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {(projects as Project[]).map((project, id) => (
            <motion.div key={id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p 
            className="text-light/60 dark:text-dark/60 mb-6"
            variants={itemVariants}
          >
            Interested in collaborating on a project?
          </motion.p>
          <motion.a 
            href="#contact" 
            className="btn-primary inline-block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playClick()}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
