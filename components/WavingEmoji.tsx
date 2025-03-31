'use client'

import { motion } from "motion/react";

const WavingEmoji = () => {
  const waveAnimation = {
    rotate: [0, 8, -5, 8, -5, 8, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      whileHover={waveAnimation}
      style={{ display: "inline-block", transformOrigin: "70% 70%" }}
    >
      👋
    </motion.div>
  );
};

export default WavingEmoji;
