"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, Fragment } from "react";

interface KineticHeadingProps {
  /** Plain text to split + animate. Use this OR `lines`. */
  text?: string;
  /**
   * For multi-line headings where some words need custom styling
   * (e.g. an italic accent span), pass an array of "lines" — each line is
   * an array of segments. A segment is either a plain string (split into
   * words and animated individually) or a node rendered as a single unit
   * (e.g. a styled <span>) that still animates as one block.
   */
  lines?: (string | { node: ReactNode; key: string })[][];
  as?: "h1" | "h2" | "h3";
  className?: string;
}

function AnimatedWord({ children, index }: { children: ReactNode; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: "0.9em", rotateX: -50 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.65, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "inline-block", transformOrigin: "bottom", whiteSpace: "pre" }}
    >
      {children}
    </motion.span>
  );
}

export function KineticHeading({ text, lines, as = "h2", className }: KineticHeadingProps) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) {
    if (text) return <Tag className={className}>{text}</Tag>;
    return (
      <Tag className={className}>
        {lines?.map((line, li) => (
          <Fragment key={li}>
            {line.map((seg) =>
              typeof seg === "string" ? seg : <Fragment key={seg.key}>{seg.node}</Fragment>
            )}
            {li < (lines?.length ?? 0) - 1 ? <br /> : null}
          </Fragment>
        ))}
      </Tag>
    );
  }

  let globalIndex = 0;

  if (text) {
    return (
      <Tag className={className}>
        {text.split(" ").map((word, i) => (
          <AnimatedWord key={i} index={i}>
            {word}{i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </AnimatedWord>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {lines?.map((line, li) => (
        <Fragment key={li}>
          {line.map((seg, si) => {
            if (typeof seg === "string") {
              const words = seg.split(" ").filter(Boolean);
              return (
                <Fragment key={si}>
                  {words.map((word, wi) => {
                    const idx = globalIndex++;
                    return (
                      <AnimatedWord key={`${si}-${wi}`} index={idx}>
                        {word}{"\u00A0"}
                      </AnimatedWord>
                    );
                  })}
                </Fragment>
              );
            }
            const idx = globalIndex++;
            return (
              <AnimatedWord key={seg.key} index={idx}>
                {seg.node}
              </AnimatedWord>
            );
          })}
          {li < (lines?.length ?? 0) - 1 ? <br /> : null}
        </Fragment>
      ))}
    </Tag>
  );
}
