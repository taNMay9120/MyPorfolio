import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '@/lib/soundManager';
import { useState } from 'react';

export const SoundToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());

  const handleToggle = () => {
    soundManager.toggleMute();
    setIsMuted(!isMuted);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="p-2.5 rounded-lg bg-light/10 dark:bg-light/20 hover:bg-light/20 dark:hover:bg-light/30 text-light dark:text-dark transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle sound"
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
    </motion.button>
  );
};
