// #region __________ NAV __________
export const NavContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
};

export const NavWordVariants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 50,
        },
    },
    exit: {
        opacity: 1,
        y: 0,
    }
};


export const NavButtonVariants = {
    hidden: {
        y: -100
    },
    visible: {
        y: 30,
        transition: {
            type: 'spring',
            delay: 0.5,
            stiffness: 150,
            damping: 10
        }
    },
    exit: {
        y: [80, -200],
        transition: {
            type: 'spring',
            stiffness: 30,
            damping: 10,
            velocity: -100,
            times: [0, 1],
        }

    },
}
// #endregion END NAV  ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦

// #endregion END TYPEWRITER  ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦

// #region __________ GENERAL __________
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const slideInFromLeft = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const slideInFromRight = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const slideInFromBottom = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { y: '100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const scaleDown = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { scale: 1.2, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const rotateIn = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
        rotate: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { rotate: -180, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const popIn = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const bounceIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: [1.2, 0.9, 1],
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeInOut' }
    },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

export const staggerChildren = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeInOut' }
    }
};

export const pulse = {
    hidden: { scale: 1 },
    visible: {
        scale: [1, 1.05, 1],
        transition: {
            repeat: Infinity,
            duration: 1,
            ease: 'easeInOut'
        }
    }
};

export const swingIn = {
    hidden: { x: '-100svw' },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 10
        }
    }
};

export const hoverScale = {
    hidden: { scale: 1 },
    hover: {
        scale: 1.1,
        transition: { duration: 0.3, ease: 'easeInOut' }
    }
};

export const hoverGlow = {
    hidden: { boxShadow: '0 0 0px rgba(255, 255, 255, 0)' },
    hover: {
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
        transition: { duration: 0.3, ease: 'easeInOut' }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const zoomIn = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};

export const zoomOut = {
    hidden: { scale: 1.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { scale: 1.5, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
};
// #endregion END GENERAL  ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦
