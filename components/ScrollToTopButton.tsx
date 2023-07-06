import {
  motion,
  Variants,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import React, { useEffect } from "react";
import ArrowUp from "../public/up-arrow.svg";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.6) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });
  return (
    <motion.button
      className="fixed bottom-0 right-0 p-10 text-white"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <ArrowUp alt="back to top" className="w-8 h-8" />
    </motion.button>
  );
};

export default ScrollToTopButton;
