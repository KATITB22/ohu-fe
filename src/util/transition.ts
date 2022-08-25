import { Variant } from 'framer-motion';

interface TransitionOptions {
  delay?: number;
  duration?: number;
  once?: boolean;
  type?: string;
}

export function getTransition(
  from: 'left' | 'right' | 'bottom',
  options?: TransitionOptions
) {
  const initial: Variant = { opacity: 0 };
  if (from === 'bottom') {
    initial.y = '100%';
  } else {
    initial.x = from === 'left' ? '-100%' : '100%';
  }
  return {
    variants: {
      initial,
      view: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: options?.delay ?? 0.2,
          type: options?.type ?? 'spring',
          duration: options?.duration ?? 1.5
        }
      }
    },
    initial: 'initial',
    whileInView: 'view',
    viewport: { once: options?.once ?? true }
  };
}

// Page Leaderboard
export const cardAnimation = {
  initialLeft: {
    opacity: 0,
    transform: 'translateX(-300px)'
  },
  initialRight: {
    opacity: 0,
    transform: 'translateX(300px)'
  },
  animate: {
    opacity: 1,
    transform: 'translateX(0px)'
  },
  exitLeft: {
    opacity: 0,
    transform: 'translateX(-300px)'
  },
  exitRight: {
    opacity: 0,
    transform: 'translateX(300px)'
  }
};

export const nyemangatinAnimation = {
  initialTop: {
    opacity: 0,
    transform: 'translateY(-50px)'
  },
  initialBottom: {
    opacity: 0,
    transform: 'translateY(50px)'
  },
  view: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      duration: 0.7,
      delay: 0.35
    }
  }
};

export const pageButtonAnimation = {
  initial: {
    opacity: 0,
    transform: 'translateY(50px)'
  },
  animate: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      duration: 0.5,
      delay: 1.32,
      type: 'spring'
    }
  }
};
