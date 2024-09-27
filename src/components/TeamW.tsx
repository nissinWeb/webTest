import { useEffect, useState } from "react";
import { teachersData, Teacher } from "./teachersData";
import { AnimatedSVG } from "./AnimatedSVG";
import TextAnimation from "./TextAnimation";

interface TeamWProps {
  category: keyof typeof teachersData;
}

export function TeamW({ category }: TeamWProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // 用于跟踪当前 hover 的元素索引
  const [isRightSide, setIsRightSide] = useState<boolean[]>([]); // 跟踪每个老师是否在屏幕右侧

  useEffect(() => {
    // 检测每个老师的位置并更新 isRightSide 状态
    const updatePosition = () => {
      const rightSideStatus = teachersData[category].map((_, index) => {
        const element = document.getElementById(`teacher-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.right > window.innerWidth / 2; // 判断是否在屏幕右侧（你可以根据需求调整比例）
        }
        return false;
      });
      setIsRightSide(rightSideStatus);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [category]);

  return (
    <div className="flex flex-col w-full ">
      <div className="text-[20px] md:text-[36px] text-black leading-[60px] tracking-[10px] md:tracking-[2px] text-left">
        <TextAnimation text={category} />
      </div>
      <div className="flex relative gap-0 justify-center flex-wrap overflow-x-auto scrollbar-none">
        {/* 遍历博士类老师 */}
        {teachersData[category].map((teacher: Teacher, index: number) => (
          <div
            key={teacher.no}
            id={`teacher-${index}`}
            className={`group md:relative flex flex-col w-[80px] overflow-visible pointer-events-auto transition-all duration-300 ease-in-out ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-40"
                : "opacity-100"
            }  ${hoveredIndex === index ? "z-10" : "z-0"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* 插画素材 */}
            <div className="relative w-[160px] h-[298px] -translate-x-1/4 pointer-events-none">
              <img
                className="absolute w-[160px] h-[298px] object-cover transition-all duration-300 ease-in-out"
                src={`/team/${teacher.no}.png`} // 使用编号匹配插画路径
                alt={teacher.name}
              />
            </div>

            {/* 文字介绍 网页端悬浮出现 */}
            {hoveredIndex === index && (
              <div
                className={`hidden md:flex w-[340px] h-[154px] relative opacity-100 transition-all duration-300 ease-in-out ${
                  isRightSide[index]
                    ? "flex-row -translate-x-[220px] "
                    : "flex-row-reverse left-1/2 justify-end "
                }`}
              >
                <div
                  className={`bg-white flex flex-col justify-end p-4 whitespace-pre-wrap  ${
                    isRightSide[index] ? "text-right" : "text-left"
                  } `}
                >
                  <div className="h-[30px] text-[20px] text-black leading-[30px] tracking-[2px]">
                    {teacher.name}
                  </div>
                  <div className="font-notosanssc font-medium text-[10px] text-black leading-[20px] tracking-[1px]">
                    {teacher.level}
                  </div>
                  <div className="font-notosanssc font-medium text-[14px] text-black leading-[33px] tracking-[1px] md:text-nowrap ">
                    {teacher.edu}
                  </div>
                </div>

                <div>
                  <AnimatedSVG height={156} />
                </div>
              </div>
            )}

            {/* 手机端点击 */}
            {hoveredIndex === index && (
              <div className="flex flex-col md:hidden w-full items-center opacity-100 transition-all duration-300 ease-in-out">
                <div className="z-[10]">
                  <AnimatedSVG height={40} />
                </div>
                <div className="h-[120px]"></div>
                <div
                  className={`absolute  w-full  bg-white flex flex-col p-4 pt-[50px] whitespace-pre-wrap    ${
                    isRightSide[index]
                      ? "text-right right-0"
                      : "text-left left-0"
                  } `}
                >
                  <div className="h-[30px] text-[20px] text-black leading-[30px] tracking-[2px] bg-white z-[11]">
                    {teacher.name}
                  </div>
                  <div className="font-notosanssc font-medium text-[10px] text-black leading-[20px] tracking-[1px]  bg-white z-[11]">
                    {teacher.level}
                  </div>
                  <div className="font-notosanssc font-medium text-[14px] text-black leading-[33px] tracking-[1px]  bg-white z-[11]">
                    {teacher.edu}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
