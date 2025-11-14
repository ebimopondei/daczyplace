"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function MotionCountUp({ from = 0, to = 1000, duration = 2, inView }: { from?: number; to?: number; duration?: number; inView: boolean }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [inView, count, to, duration]);

  return (
    <motion.span>
      {rounded}
    </motion.span>
  );
}
