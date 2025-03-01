import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      {showLogo && (
        <motion.div 
          className="netflix-animation flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <Utensils className="text-primary w-16 h-16 mb-4" />
          <h1 className="logo-font text-6xl md:text-8xl tracking-wider text-primary">
            LOL <span className="text-secondary">FOODS</span>
          </h1>
          <p className="accent-font text-accent text-xl mt-2">Delicious discoveries await</p>
        </motion.div>
      )}
    </div>
  );
};

export default SplashScreen;