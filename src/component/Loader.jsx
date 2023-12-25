import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [currentLetter, setCurrentLetter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetter((prevLetter) => (prevLetter + 1) % 3); // Loop through letters
    }, 300);

    return () => clearInterval(interval);
  }, []);
  const letterVariants = {
    initial: {
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
    bounce: {
      y: -20,
      transition: {
        duration: 1,
        ease: "easeOut",
        yoyo: Infinity,
      },
    },
  };

  return (
    <div className="loader">
      {Array.from("Mel").map((letter, index) => (
        <motion.div
          key={index}
          variants={letterVariants}
          initial="initial"
          animate={currentLetter === index ? "bounce" : ""} // Trigger animation based on state
          delay={index * 0.2}
        >
          <div>{letter}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Loader;
