import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedSVGProps {
  height: number;
}

export function AnimatedSVG({ height }: AnimatedSVGProps) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      const totalLength = pathRef.current.getTotalLength(); // 获取路径的总长度

      // 设置初始状态：线条不可见，strokeDashoffset = 总长度
      gsap.set(pathRef.current, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      // 动画：从 strokeDashoffset = 总长度 到 0，线条逐渐绘制出来
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 0.5, // 动画时长为2秒
        ease: "power2.inOut", // 缓动效果
      });
    }
  }, [height]);

  return (
    <svg
      width="4"
      height={height}
      viewBox={`0 0 4 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d={`M2 0C1.26 0 0.67 0.59 0.67 1.33C0.67 2.07 1.26 2.67 2 2.67C2.74 2.67 3.33 2.07 3.33 1.33C3.33 0.59 2.74 0 2 0ZM1.75 2L1.75 ${height}L2.25 ${height}L2.25 2L1.75 2Z`}
        fill="none"
        stroke="black"
        strokeWidth="0.5"
      />
    </svg>
  );
}
