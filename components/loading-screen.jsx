"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        // Increment progress with varying speeds for realistic loading
        const increment = Math.random() * 15 + 5;
        return Math.min(prevProgress + increment, 100);
      });
    }, 300);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.h1
              style={{
                fontFamily: "'Brush Script MT', cursive",
              }}
              className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Humail Ijaz<span className="text-yellow-400">.</span>
            </motion.h1>

            <div className="w-80 sm:w-96 mx-auto">
              <div className="relative">
                <motion.div
                  className="h-1 bg-gray-800 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-yellow-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.p
                  className="text-yellow-400 mt-4 text-lg font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {Math.round(progress)}%
                </motion.p>
              </div>

              <motion.p
                className="text-gray-400 mt-6 text-sm uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Loading Portfolio
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}