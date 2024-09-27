import { ResultsStudent } from "../components/ResultStudent";
import { ResultData } from "../components/ResultData";
import TextAnimation from "../components/TextAnimation";
import AnimatedNumber from "../components/AnimatedNumber";
import { useEffect, useRef, useState } from "react";

export function Results() {
  // 创建 ref 来定位到每个部分
  const resultAchievementsRef = useRef<HTMLDivElement>(null);
  const interviewsRef = useRef<HTMLDivElement>(null);

  // 使用 state 来保存当前可见的部分
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Active section changed to:", activeSection); // 输出当前的activeSection
  }, [activeSection]);

  // 使用 IntersectionObserver 监听滚动事件
  useEffect(() => {
    const options = {
      root: null, // 视口
      rootMargin: "0px", // 视口上下边缘的偏移量
      threshold: 0.1, // 目标进入视口 10% 时触发
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // 根据元素的 id 设置当前可见部分
        }
      });
    }, options);

    // 监听每个部分
    const sections = [resultAchievementsRef, interviewsRef];
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

  // 滚动到相应的部分
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -180; // 导航栏的高度偏移
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col w-full items-center gap-[128px] pb-[104px] px-[20px] md:px-[156px]">
      {/* 侧边导航栏 */}
      <div className="flex md:hidden fixed top-[200px] right-[10px]  flex-col gap-[50px] z-[10]">
        <div className="rotate-90 text-[12px] tracking-[1.12px] w-[56px] font-medium">
          合格实绩
        </div>
        <div className="flex flex-col justify-start gap-[60px] items-center font-normal">
          {/* 合格实绩 */}
          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
              activeSection === "resultAchievements"
                ? "after:scale-x-100"
                : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(resultAchievementsRef)}
          >
            合格实绩
          </div>

          {/* 合格采访 */}
          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
              activeSection === "interviews"
                ? "after:scale-x-100"
                : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(interviewsRef)}
          >
            合格采访
          </div>
        </div>
      </div>

      <div
        className="flex flex-col  gap-[128px]"
        ref={resultAchievementsRef}
        id="resultAchievements"
      >
        <div
          className="relative w-full pt-[80px] flex flex-col-reverse px-[50px]
      gap-[30px] md:gap-0 md:flex-row md:justify-between md:px-0"
        >
          <img
            className="absolute top-[0%] -left-[30%] md:left-auto md:right-[0%] max-w-full h-auto object-cover"
            src="/zIe1KM.svg"
          />
          <div className="text-[13px] leading-[28px] tracking-[1.12px] md:text-[16px] md:tracking-[1.5px] md:leading-[2.063rem] font-medium">
            <p className="m-0">
              日进艺术学院，
              <br className="md:hidden" /> 前往你梦想殿堂的第一级台阶。
            </p>
            <p className="m-0">
              我们用扎实的基础教学与个性化的辅导，
              <br className="hidden md:block" />
              将无数学员送入日本的各大名校。
            </p>
            <p className="m-0">以实绩为基础，做你的指路人。</p>
          </div>
          <div>
            <AnimatedNumber />
            <span className="text-[20px] leading-[23px] tracking-[1.5px] pl-2">
              枚合格实绩
            </span>
          </div>
        </div>

        <div className="w-full relative px-[10%]">
          <div className="flex flex-row items-start justify-center flex-wrap content-start gap-y-[40px] gap-x-[4.5rem] text-center">
            <div className="relative flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[48px]">
                <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                  <TextAnimation text="116" />
                </div>
                <div className="tracking-[1.5px] leading-[1.438rem] font-medium min-h-[48px]">
                  御三家日本顶级美大 <br />
                  +欧美世界级名校
                </div>
              </div>
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[250px]  md:w-[13.5rem]">
                东京艺术大学、武藏野美术大学、多摩美术大学，在日本被称为「美大御三家」，在日本有着与中国「三大美院」相当的地位。
              </div>
            </div>

            <div className=" relative flex flex-col gap-[20px] justify-start">
              <div className="flex flex-col gap-[48px]">
                <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                  <TextAnimation text="160" />
                </div>
                <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px]">
                  东京五美大
                </div>
              </div>
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[250px]  md:w-[13.5rem]">
                包括多摩美术大学、武藏野美术大学、东京造型大学、女子美术大学、日本大学艺术学部在内的这五所学校，坐落于繁华的东京，被称为「东京五美」。
              </div>
            </div>

            <div className=" relative flex flex-col gap-[20px] justify-start">
              <div className="flex flex-col gap-[48px]">
                <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                  <TextAnimation text="104" />
                </div>
                <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px]">
                  关西四美大
                </div>
              </div>
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[250px]  md:w-[13.5rem]">
                包括京都造形艺术大学、京都精华大学、大阪艺术大学和成安造形大学在内的这四所学校，坐落于风景秀丽的关西，被称为「关西四美」。
              </div>
            </div>
            <div className=" relative flex flex-col gap-[20px] justify-start">
              <div className="flex flex-col gap-[48px]">
                <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                  <TextAnimation text="40" />
                </div>
                <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px]">
                  国公立知名大学
                </div>
              </div>
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[250px]  md:w-[13.5rem]">
                日本的国立大学与公立大学以标准严格著称，同时也由于其较低的学费而受到青睐。但这些学校竞争激烈，对留学生来说较有难度。一桥大学、筑波大学、静冈大学、京都市立艺术大学等均在此列。
              </div>
            </div>
            <div className=" relative flex flex-col gap-[20px] justify-start">
              <div className="flex flex-col gap-[48px]">
                <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                  <TextAnimation text="14" />
                </div>
                <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px]">
                  早庆+GMARCH
                  <br />
                  日本知名私立大学
                </div>
              </div>
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[250px]  md:w-[13.5rem]">
                早庆指的是著名的早稻田大学和庆应义塾大学，而GMARCH指的是立教大学、青山学院大学、法政大学、中央大学、明治大学、学习院大学。这些都是日本著名的优秀私立大学。
              </div>
            </div>
            <div className=" relative flex flex-col gap-[20px] justify-start">
              <div className="flex flex-col gap-[48px]">
                <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                  <TextAnimation text="104" />
                </div>
                <div className="tracking-[1.5px] leading-[1.438rem] font-medium  min-h-[48px]">
                  服装名校文服系列校
                </div>
              </div>
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[250px]  md:w-[13.5rem]">
                专攻服装专业的学校，通常指的是文化服装学院、文化学院大学、BFGU。这些大学在世界范围内的服装领域都具有非常高的名望。{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 合格采访 */}
      <div className="flex flex-col" ref={interviewsRef} id="interviews">
        <div className="grid grid-cols-12 gap-[24px] relative">
          <div className="col-span-12 md:col-span-3 text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px]">
            合格采访
          </div>
          <div className="hidden col-span-9 top-[0rem] left-[18rem] text-[15px] tracking-[1.5px] leading-[2.063rem] font-medium text-justify md:inline-block w-[52.5rem]">
            八年，我们看着他们飞向远方。
            <br />
            自日进艺术成立以来，我们已经帮助500名以上的学生成功升学，日进的合格学员几乎遍布日本各大知名美院。
            <br />
            这里是去往更高处的起点。
          </div>
        </div>

        <div>
          {ResultData.map((data) => (
            <ResultsStudent
              studentName={data.studentName}
              School={data.School}
              studentContentA={data.studentContentA}
              studentContentB={data.studentContentB}
              videoLink={data.videoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
