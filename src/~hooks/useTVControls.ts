import { useEffect } from 'react';

type Controls = {
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onSelect?: () => void;
  onBack?: () => void; // <--- NEW
};

export const useTVControls = (callbacks: Controls) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          callbacks.onUp?.();
          break;
        case 'ArrowDown':
          callbacks.onDown?.();
          break;
        case 'ArrowLeft':
          callbacks.onLeft?.();
          break;
        case 'ArrowRight':
          callbacks.onRight?.();
          break;
        case 'Enter':
        case ' ':
          callbacks.onSelect?.();
          break;
        case 'Backspace':
        case 'Escape':
        case 'SoftLeft': 
          callbacks.onBack?.();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [callbacks]);
};