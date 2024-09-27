import React, { useEffect, useRef, useState } from "react";

// 定义文字动画组件
const TextAnimation: React.FC<{ text: string }> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 触发动画
        } else {
          setIsVisible(false); // 滑出视口时，重置动画状态
        }
      },
      { threshold: 0.1 } // 当组件可见部分大于10%时触发
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div ref={textRef} className="overflow-hidden">
      <div
        className={`transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        }`}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextAnimation;
