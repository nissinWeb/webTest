import { useEffect, useRef, useState } from "react";
import { TeamW } from "../components/TeamW";

export function Team() {
  // 创建 ref 来定位到每个部分
  const dcRef = useRef<HTMLDivElement>(null);
  const faRef = useRef<HTMLDivElement>(null);
  const deRef = useRef<HTMLDivElement>(null);
  const acgRef = useRef<HTMLDivElement>(null);
  const caRef = useRef<HTMLDivElement>(null);

  // 使用 state 来保存当前可见的部分
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Active section changed to:", activeSection); // 输出当前的activeSection
  }, [activeSection]);
  useEffect(() => {
    console.log(dcRef.current); // 应该输出对应的 DOM 元素
    console.log(faRef.current);
    console.log(deRef.current);
    console.log(acgRef.current);
    console.log(caRef.current);
  }, []);

  // 使用 IntersectionObserver 监听滚动事件
  useEffect(() => {
    const options = {
      root: null, // 视口
      rootMargin: "-100px", // 视口上下边缘的偏移量
      threshold: 0.1, // 目标进入视口 50% 时触发
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Intersecting section:", entry.target.id);
          setActiveSection(entry.target.id); // 根据元素的 id 设置当前可见部分
        }
      });
    }, options);

    // 监听每个部分
    const sections = [dcRef, faRef, deRef, acgRef, caRef];
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    // 清除观察器
    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);

  // 修改后的滚动函数，带有偏移量
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -180; // 导航栏的高度偏移
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full relative px-10 md:px-20 lg:px-[156px] pb-[100px]">
      {/* 侧边导航栏 */}
      <div className="fixed md:hidden top-[158px] right-[20px] flex flex-col gap-[80px] z-[10]">
        <div className="rotate-90 text-[12px] tracking-[1.12px] font-medium w-[20px] text-nowrap">
          课程安排
        </div>
        <div className="flex w-[20px] text-nowrap flex-col justify-start gap-[60px] items-center font-normal">
          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] 
               inline-block relative ${
                 activeSection === "dc"
                   ? "after:scale-x-100"
                   : "after:scale-x-0"
               } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(dcRef)}
          >
            博士
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] 
               inline-block relative ${
                 activeSection === "fa"
                   ? "after:scale-x-100"
                   : "after:scale-x-0"
               } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(faRef)}
          >
            纯艺方向
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
              activeSection === "de" ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(deRef)}
          >
            设计方向
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
              activeSection === "acg" ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(acgRef)}
          >
            ACG数媒方向
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
              activeSection === "ca" ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(caRef)}
          >
            文化艺术
          </div>
        </div>
      </div>

      <div className="flex  md:justify-end">
        <div className="w-3/4 text-[16px] pb-[72px] pt-[100px] text-[#232328] leading-[33px] tracking-[1px] text-left">
          日进艺术学院成立于2017年，是日本最早的以专业、专心、专注为核心，专攻留学生美术升学辅导的机构之一。我们的核心教师团队在留学生升学辅导领域，均有10年以上的工作经验。教育需要长期的沉淀与积累，希望能用我们这么多年的沉淀与积累帮助到大家。
        </div>
      </div>

      <div className="flex flex-col gap-[60px] overflow-x-hidden">
        <div ref={dcRef} id="dc">
          <TeamW category="博士" />
        </div>
        <div ref={faRef} id="fa">
          <TeamW category="纯艺方向" />
        </div>
        <div ref={deRef} id="de">
          <TeamW category="设计方向" />
        </div>
        <div ref={acgRef} id="acg">
          <TeamW category="ACG数媒方向" />
        </div>
        <div ref={caRef} id="ca">
          <TeamW category="文化艺术方向" />
        </div>
      </div>
    </div>
  );
}
