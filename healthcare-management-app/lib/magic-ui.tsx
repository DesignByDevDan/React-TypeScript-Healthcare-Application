"use client";

import { motion } from "framer-motion";
import React from 'react'; // Make sure React is imported for ReactNode

interface MotionDivProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A wrapper component that applies a fade-in and slide-up animation to its children.
 * 
 * @param {React.ReactNode} children - The content to be animated.
 * @param {string} [className] - Optional class name to apply to the inner div.
 * @returns {React.ReactNode} The animated div containing the children.
 */
export const MotionDiv: React.FC<MotionDivProps> = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <div className={className}>
      {children}
    </div>
  </motion.div>
);

export default MotionDiv;