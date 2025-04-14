"use client";

import { motion } from "motion/react";
import { useState } from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  const stiffNess = 200;
  const damping = 15;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="overflow-hidden text-4xl lg:text-5xl font-bold relative"
      onMouseEnter={() => setIsHovered((prev) => !prev)}
      onMouseLeave={() => setIsHovered((prev) => !prev)}
    >
      <motion.h1
        className="leading-10 pb-2"
        initial={{
          y: 0,
        }}
        animate={{
          y: isHovered ? -50 : 0
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
        {title}
      </motion.h1>
    </div>
  );
};
export default Title;
