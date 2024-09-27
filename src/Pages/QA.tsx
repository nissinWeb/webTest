import { useEffect, useRef, useState } from "react";
import { QAcomponent } from "../components/QAcomponent";
import {
  QAData,
  StudyRequirements,
  JapanPreparation,
} from "../components/QAData";

export function QA() {
  // 创建 ref 来定位到每个部分
  const xxxzyRef = useRef<HTMLDivElement>(null);
  const xbdxyRef = useRef<HTMLDivElement>(null);
  const frzbRef = useRef<HTMLDivElement>(null);

  // 使用 state 来保存当前可见的部分
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Active section changed to:", activeSection); // 输出当前的activeSection
  }, [activeSection]);
  useEffect(() => {
    console.log(xxxzyRef.current); // 应该输出对应的 DOM 元素
    console.log(xbdxyRef.current);
    console.log(frzbRef.current);
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
    const sections = [xxxzyRef, xbdxyRef, frzbRef];
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
    <div className="relative flex flex-col w-fulls pl-[20px] pr-[70px] md:px-20 lg:px-[156px] pb-[100px] pt-[100px]">
      {/* 侧边导航栏 */}
      <div className="md:hidden  fixed top-[166px] right-[20px] flex flex-col gap-[100px] w-[20px] text-nowrap z-[10] overflow-visible">
        <div className="rotate-90 text-[12px] tracking-[1.12px] font-medium">
          常见问题
        </div>
        <div className="flex flex-col justify-start gap-[100px] items-center font-normal">
          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] inline-block relative ${
              activeSection === "xxxzy"
                ? "after:scale-x-100"
                : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(xxxzyRef)}
          >
            选校选专业
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] inline-block relative ${
              activeSection === "xbdxy"
                ? "after:scale-x-100"
                : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(xbdxyRef)}
          >
            学部・大学院考学要求
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
              activeSection === "frzb" ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(frzbRef)}
          >
            赴日准备
          </div>
        </div>
      </div>

      <div
        className="text-[24px] tracking-[10px] md:text-[36px] md:tracking-[2px] pb-[80px] "
        id="xxxzy"
        ref={xxxzyRef}
      >
        选校选专业
      </div>
      {QAData.map((item) => (
        <QAcomponent question={item.question} answer={item.answer} />
      ))}
      <div
        className="text-[24px] leading-[60px] tracking-[10px] md:text-[36px] md:tracking-[2px] py-[80px] "
        id="xbdxy"
        ref={xbdxyRef}
      >
        学部・大学院
        <br className="md:hidden" />
        考学要求
      </div>
      {StudyRequirements.map((item) => (
        <QAcomponent question={item.question} answer={item.answer} />
      ))}
      <div
        className="text-[24px] tracking-[10px] md:text-[36px] md:tracking-[2px] py-[80px] "
        id="frzb"
        ref={frzbRef}
      >
        赴日准备
      </div>
      {JapanPreparation.map((item) => (
        <QAcomponent question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
