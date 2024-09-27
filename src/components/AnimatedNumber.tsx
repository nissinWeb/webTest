import React, { useEffect, useState, useRef } from "react";

const AnimatedNumber: React.FC = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        let current = 0;
        const interval = setInterval(() => {
          current += 10; // 这里控制递增的步长
          setCount(current >= 503 ? 503 : current);
          if (current >= 503) {
            clearInterval(interval); // 完成到503时清除interval
          }
        }, 10); // 控制动画的速度
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5, // 控制目标元素进入视口的程度
    });

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      if (spanRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(spanRef.current);
      }
    };
  }, []);

  return (
    <span
      ref={spanRef}
      className="text-[64px] leading-[23px] tracking-[1.5px] transition-transform duration-700"
    >
      {count}
    </span>
  );
};

export default AnimatedNumber;
