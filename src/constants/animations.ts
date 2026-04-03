// ===== Entrance =====
export const STAGGER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const RISE = {
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ===== Background blobs =====
export const BG_BLOB = {
  animate: {
    scale: [1, 1.06, 1],
    opacity: [0.8, 1, 0.8],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const BG_BLOB_DELAYED = {
  animate: {
    scale: [1, 1.1, 1],
  },
  transition: {
    duration: 10,
    delay: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// ===== Glow pulse =====
export const GLOW_PULSE = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.4, 0, 0.4],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// ===== Floating cards =====
export const FLOAT = (i = 0, delay = 0) => ({
  animate: { y: [0, -4, 0] },
  transition: {
    duration: 3.5 + i * 0.3,
    delay,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

// ===== Shine effect =====
export const SHINE = {
  animate: {
    translateX: ["-100%", "100%"],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatDelay: 2,
    ease: "easeInOut",
  },
};

// ===== Stats =====
export const STATS_REVEAL = (i: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    delay: 1.2 + i * 0.15,
  },
});

// ===== Scroll reveal base =====
export const SCROLL_REVEAL = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

// ===== Fade up (with delay) =====
export const FADE_UP = (delay = 0, y = 20, duration = 0.6) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

// ===== Scale in =====
export const SCALE_IN = (delay = 0) => ({
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    duration: 0.5,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

// ===== Button interaction =====
export const BUTTON_INTERACTION = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.96 },
};

export const CARD_HOVER = {
  whileHover: {
    y: -10,
    scale: 1.018,
    boxShadow:
      "0 24px 48px rgba(47,111,115,0.14), 0 0 0 1.5px rgba(47,111,115,0.2)",
  },
  whileTap: { scale: 0.975, y: -4 },
  transition: { type: "spring", stiffness: 360, damping: 28 },
};

// Factory for staggered blur-in entry (pass index + isInView)
export const cardReveal = (i: number, inView: any) => ({
  initial: { opacity: 0, y: 36, filter: "blur(6px)" },
  animate: inView
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 36, filter: "blur(6px)" },
  transition: {
    duration: 0.55,
    delay: 0.1 + i * 0.1,
    ease: [0.22, 1, 0.36, 1],
  },
});
