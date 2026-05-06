"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

export interface ScrollRevealProps {
  children: ReactNode;
  // Độ trễ trước khi animation bắt đầu
  delay?: number;
  // Thời gian animation chạy
  duration?: number;
  // Hướng animation khi element vào viewport
  direction?: "up" | "down" | "left" | "right" | "none";
  // Khoảng cách di chuyển ban đầu
  distance?: number;
  className?: string;
  style?: CSSProperties;
  // Bao nhiêu % element cần visible mới trigger animation
  threshold?: number;
  // Chỉ animate 1 lần hay mỗi lần scroll vào/ra
  triggerOnce?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 600,
  direction = "up",
  distance = 30,
  className = "",
  style = {},
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    const setInitialState = () => {
      const translateValue = {
        up: `translate(0, ${distance}px)`,
        down: `translate(0, -${distance}px)`,
        left: `translate(${distance}px, 0)`,
        right: `translate(-${distance}px, 0)`,
        none: "translate(0, 0)",
      }[direction];

      element.style.opacity = "0";
      element.style.transform = translateValue;
      element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
      if (delay > 0) {
        element.style.transitionDelay = `${delay}ms`;
      }
    };

    setInitialState();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasAnimated.current || !triggerOnce) {
              // Trigger animation
              requestAnimationFrame(() => {
                element.style.opacity = "1";
                element.style.transform = "translate(0, 0)";
              });
              hasAnimated.current = true;

              if (triggerOnce) {
                observer.unobserve(element);
              }
            }
          } else if (!triggerOnce) {
            // Reset animation if not triggerOnce
            setInitialState();
            hasAnimated.current = false;
          }
        });
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, direction, distance, threshold, triggerOnce]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
}
