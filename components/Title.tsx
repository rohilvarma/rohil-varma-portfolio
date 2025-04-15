"use client";

import { motion } from "motion/react";
import { useState } from "react";

type TitleProps = {
  title: string;
  hoverText?: string;
  size?: number;
};

const Title = ({ title, hoverText, size = 4 }: TitleProps) => {
  const stiffNess = 200;
  const damping = 15;
  const [isHovered, setIsHovered] = useState(false);
  const sizeClasses = {
    1: "text-xl lg:text-2xl",
    2: "text-2xl lg:text-3xl",
    3: "text-3xl lg:text-4xl",
    4: "text-4xl lg:text-5xl",
    5: "text-5xl lg:text-6xl",
    6: "text-6xl lg:text-7xl",
    7: "text-7xl lg:text-8xl",
    8: "text-8xl lg:text-9xl",
  };
  return (
    <div
      className={`overflow-hidden font-bold relative ${sizeClasses[size as keyof typeof sizeClasses]}`}
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      <motion.h1
        className="leading-10 pb-2"
        initial={{
          y: 0,
        }}
        animate={{
          y: isHovered ? -50 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: stiffNess,
          damping: damping,
        }}
      >
        {title}
      </motion.h1>
      <motion.h1
        className="absolute bottom-0 leading-10 pb-2"
        initial={{
          y: 50,
        }}
        animate={{
          y: isHovered ? 0 : 50,
        }}
        transition={{
          type: "spring",
          stiffness: stiffNess,
          damping: damping,
        }}
      >
        {hoverText ?? title}
      </motion.h1>
    </div>
  );
};
export default Title;
