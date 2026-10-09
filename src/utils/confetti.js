import confetti from 'canvas-confetti';

/**
 * Fires a clean, aquatic-themed confetti celebration
 * with water blue and ice cyan droplets when the user downloads the APK.
 */
export function triggerWaterConfetti() {
  try {
    const end = Date.now() + 800;
    const colors = ['#0437F2', '#2E5BFF', '#00D2FF', '#7FA0FF', '#FFFFFF'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.7 },
        colors: colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.7 },
        colors: colors,
        disableForReducedMotion: true,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch {
    // Graceful fallback if canvas is not supported
  }
}

