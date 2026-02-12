import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const TITLE = "Outside Local";
const SUBTITLE = "Beyond the comfort zone";

const TITLE_STAGGER = 0.06;
const SUBTITLE_STAGGER = 0.035;
const SUBTITLE_START_DELAY = 1.0;
const POST_REVEAL_PAUSE = 0.2;

function splitText(text) {
  return Array.from(text);
}

function IntroAnimation() {
  const [isDissolving, setIsDissolving] = useState(false);

  const titleChars = useMemo(() => splitText(TITLE), []);
  const subtitleChars = useMemo(() => splitText(SUBTITLE), []);

  useEffect(() => {
    const revealEnd = SUBTITLE_START_DELAY + subtitleChars.length * SUBTITLE_STAGGER;
    const dissolveDelayMs = Math.round((revealEnd + POST_REVEAL_PAUSE) * 1000);

    const timer = window.setTimeout(() => {
      setIsDissolving(true);
    }, dissolveDelayMs);

    return () => window.clearTimeout(timer);
  }, [subtitleChars.length]);

  return (
    <section className="loader-root" aria-label="Intro Animation">
      <motion.div
        className="loader-text-wrap"
        initial={{ opacity: 1, filter: "blur(0px)" }}
        animate={
          isDissolving
            ? {
                opacity: 0,
                filter: "blur(16px)",
                transition: { duration: 0.72, ease: [0.4, 0, 0.2, 1] }
              }
            : { opacity: 1, filter: "blur(0px)" }
        }
      >
        <h1 className="loader-title" aria-label={TITLE}>
          {titleChars.map((char, index) => (
            <motion.span
              className="intro-letter"
              key={`title-${index}-${char}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * TITLE_STAGGER,
                duration: 0.34,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <p className="loader-subtitle" aria-label={SUBTITLE}>
          {subtitleChars.map((char, index) => (
            <motion.span
              className="intro-letter"
              key={`subtitle-${index}-${char}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: SUBTITLE_START_DELAY + index * SUBTITLE_STAGGER,
                duration: 0.32,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </section>
  );
}

export default IntroAnimation;