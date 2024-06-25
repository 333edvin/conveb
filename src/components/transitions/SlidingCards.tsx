import { motion } from "framer-motion";

interface SlidingCardsProps {
  delay: number;
  children: React.ReactNode;
}

export const SlidingCards: React.FC<SlidingCardsProps> = ({ delay, children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0, 0.71, 0.2, 1.01]
    }}
  >
    {children}
  </motion.div>
);