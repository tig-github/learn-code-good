import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const LessonIcon = () => {
  const [isOpen, setOpen] = useState(false);
  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" },
  };

  const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" },
  };

  // closed
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 9.5L24 9.5" stroke="#FFFFFF" />
    <path d="M0 14.5L15 14.5" stroke="#FFFFFF" />
  </svg>;

  // middle
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 9.5L24 9.5" stroke="#FFFFFF" />
    <path d="M0 14.5L24 14.5" stroke="#FFFFFF" />
  </svg>;

  // open
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.06061 2.99999L21.0606 21" stroke="#FFFFFF" />
    <path d="M3.00006 21.0607L21 3.06064" stroke="#FFFFFF" />
  </svg>;

  const onClick = async () => {
    setOpen(!isOpen);

    if (!isOpen) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
  };

  return (
    <>
      <button onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <motion.path
            {...path01Variants.closed}
            animate={path01Controls}
            transition={{ duration: 0.2 }}
            stroke="#000000"
          />
          <motion.path
            {...path02Variants.closed}
            animate={path02Controls}
            transition={{ duration: 0.2 }}
            stroke="#000000"
          />
        </svg>
      </button>

      {isOpen && <Sidebar />}
    </>
  );
};

export default LessonIcon;
