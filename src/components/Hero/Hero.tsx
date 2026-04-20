import { getImageUrl } from "../../utils";
import { motion } from 'framer-motion';
import { GradientMesh, GlassmorphicCard } from '../ui/GlassmorphicComponents';
import { 
  containerVariants, 
  itemVariants, 
  floatingVariants,
  slideInLeftVariants
} from '@/lib/animations';
import { ChevronDown } from 'lucide-react';
import { soundManager } from '@/lib/soundManager';

export const Hero = (): JSX.Element => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      {/* Animated gradient mesh background */}
      <GradientMesh className="dark" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div 
            className="flex flex-col justify-center space-y-6"
            variants={slideInLeftVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit leading-tight">
                <motion.span 
                  className="block text-light dark:text-dark"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span 
                  className="block gradient-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: 'spring' }}
                >
                  Tanmay
                </motion.span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-lg md:text-xl text-light/80 dark:text-dark/80 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              I am a full-stack developer with expertise in building modern, 
              scalable web applications using React and Node.js. Passionate about 
              creating seamless user experiences and robust backend systems.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="mailto:tnmsinha65@email.com"
                className="btn-primary text-center"
                onMouseEnter={() => soundManager.playHover()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary text-center"
                onMouseEnter={() => soundManager.playHover()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-8 border-t border-light/20 dark:border-dark/20"
              variants={containerVariants}
            >
              {[
                { value: '1+', label: 'Years Experience' },
                { value: '5+', label: 'Projects Completed' },
                { value: '100%', label: 'Dedication' }
              ].map((stat, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-light/60 dark:text-dark/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative flex justify-center"
            variants={containerVariants}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              
              {/* Image container */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={getImageUrl("hero/pic2.png")}
                  alt="Tanmay Sinha"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};
