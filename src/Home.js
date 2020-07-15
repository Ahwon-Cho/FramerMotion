import React from "react";
import { motion } from "framer-motion";

function MotionDayOne() {
  return (
    <div>
      <motion.h2 animate={{ fontSize: 100, color: "#ff2994", y: 100 }}>
        Welcome
      </motion.h2>
    </div>
  );
}

export default MotionDayOne;
