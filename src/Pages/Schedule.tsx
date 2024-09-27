import { useEffect, useRef, useState } from "react";
import TextAnimation from "../components/TextAnimation";

export function Schedule() {
  // 创建 ref 来定位到每个部分
  const kctsRef = useRef<HTMLDivElement>(null);
  const sxzdRef = useRef<HTMLDivElement>(null);
  const xbkcRef = useRef<HTMLDivElement>(null);
  const dxykcRef = useRef<HTMLDivElement>(null);

  // 使用 state 来保存当前可见的部分
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Active section changed to:", activeSection); // 输出当前的activeSection
  }, [activeSection]);
  useEffect(() => {
    console.log(kctsRef.current); // 应该输出对应的 DOM 元素
    console.log(sxzdRef.current);
    console.log(xbkcRef.current);
    console.log(dxykcRef.current);
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
    const sections = [kctsRef, sxzdRef, xbkcRef, dxykcRef];
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
    <div className="w-full relative  pt-[30px] flex flex-col">
      {/* 侧边导航栏 */}
      <div className="fixed md:hidden top-[200px] right-[10px] flex flex-col gap-[50px] z-[10]">
        <div className="rotate-90 text-[12px] tracking-[1.12px] w-[66px] font-medium">
          课程安排
        </div>
        <div className="flex  flex-col justify-start gap-[60px] items-center font-normal">
          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] 
               inline-block relative ${
                 activeSection === "kcts"
                   ? "after:scale-x-100"
                   : "after:scale-x-0"
               } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(kctsRef)}
          >
            课程特色
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] 
               inline-block relative ${
                 activeSection === "sxzd"
                   ? "after:scale-x-100"
                   : "after:scale-x-0"
               } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(sxzdRef)}
          >
            升学指导
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
              activeSection === "xbkc" ? "after:scale-x-100" : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(xbkcRef)}
          >
            学部课程
          </div>

          <div
            className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
              activeSection === "dxykc"
                ? "after:scale-x-100"
                : "after:scale-x-0"
            } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
            onClick={() => scrollToSection(dxykcRef)}
          >
            大学院课程
          </div>
        </div>
      </div>

      <div className="relative flex flex-col">
        <div className="pr-[70px] md:pr-0 w-full flex overflow-clip justify-center">
          <img
            className="hidden md:block w-[45.75rem] h-[22.875rem] object-cover"
            alt=""
            src="JZH04855-HDR 1.png"
          />
          <img
            className=" w-[44.25rem] h-[22.938rem] object-cover"
            src="JZH04304 1.png"
          />
        </div>

        <div className="w-full px-[20px] md:px-[100px] lg:px-[156px] flex flex-col gap-[100px pt-[60px]">
          <div>
            {/* 网页端 */}
            <div className="hidden md:grid grid-cols-12 gap-[24px]">
              <div className="col-span-3"></div>
              <div className="col-span-9 tracking-[1.5px] leading-[2.063rem] font-medium w-full">
                在日进艺术学院，我们拥有最完善的课程体系。我们拥有最有经验的讲师团队，将会为每一位学员提供最专业的美术指导。同时，学院还开设有专门针对大学·大学院升学的日语考试对策课程，我们会根据学生的升学志愿、专攻方向和水平，为每一位学员量身定制属于自己的合格升学路线及教学内容。在日进艺术学院的课程现场，我们有来自日本一流美院的助教老师，为每一位学生和主讲老师搭建起无障碍的沟通桥梁。此外，在学生准备升学考试前，我们安排了专业的日籍面试指导老师，为学生提供最完备的面试模拟训练。
              </div>
            </div>

            {/* 手机端 */}
            <div className="md:hidden px-[50px] tracking-[1.5px] leading-[2.063rem] font-medium ">
              在日进艺术学院，我们拥有最完善的课程体系。我们拥有最有经验的讲师团队，将会为每一位学员提供最专业的美术指导。同时，学院还开设有专门针对大学·大学院升学的日语考试对策课程，我们会根据学生的升学志愿、专攻方向和水平，为每一位学员量身定制属于自己的合格升学路线及教学内容。在日进艺术学院的课程现场，我们有来自日本一流美院的助教老师，为每一位学生和主讲老师搭建起无障碍的沟通桥梁。此外，在学生准备升学考试前，我们安排了专业的日籍面试指导老师，为学生提供最完备的面试模拟训练。
            </div>
          </div>

          {/* 课程特色网页端 */}
          <div ref={kctsRef} id="kcts">
            <div className="hidden md:grid grid-cols-12 gap-[24px] pt-[80px]">
              <div className="col-span-3">
                <div className="text-[2.25rem] tracking-[2px] font-medium text-nowrap">
                  <TextAnimation text="课程特色"></TextAnimation>
                </div>
              </div>

              <div className="col-span-9 relative grid grid-cols-3 gap-[24px] pt-[10px]">
                <div className=" flex flex-col gap-[24px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    学生本位主义授课
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    重视老师与学生一对一的交流，把握每个学生的特点、特长、能力及专业报考要求，为每一个学生量身定制升学路线并安排升学辅导。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>
                <div className=" flex flex-col gap-[24px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    任务型教学
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    根据不同学生的发展方向，为学生量身定制学习任务及课题，注重让学生从实践及经验中提高自己的专业水平。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>
                <div className=" flex flex-col gap-[24px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    拓展练习模式
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    将重要知识点和核心技能进行反复和进一步练习，短时间内有效率的提高学生的专业能力。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>
                <div className=" flex flex-col gap-[24px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    核心技能培养
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    发掘学生自身潜力，系统化培养且强化进入顶级艺术院校所需的核心技能。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>

                <div className=" flex flex-col gap-[24px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    沉浸式模拟
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    通过高造诣的日本教师授课，营造日本大学・大学院美术专业的课堂氛围，让学生理解并掌握日本的美术思维模式，为成功进入日本顶级艺术院校打下坚实的基础。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>
              </div>
            </div>

            {/* 课程特色手机端 */}
            <div className="flex md:hidden flex-col gap-[50px] pt-[64px]">
              <div className="text-[20px] md:text-[2.25rem] tracking-[10px] md:tracking-[2px] leading-[3.75rem] font-medium">
                课程特色
              </div>

              <div className="relative flex flex-col gap-[30px] pt-[10px] px-[50px]">
                <div className=" flex flex-col gap-[10px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    学生本位主义授课
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    重视老师与学生一对一的交流，把握每个学生的特点、特长、能力及专业报考要求，为每一个学生量身定制升学路线并安排升学辅导。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>
                <div className=" flex flex-col gap-[10px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    任务型教学
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    根据不同学生的发展方向，为学生量身定制学习任务及课题，注重让学生从实践及经验中提高自己的专业水平。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>
                <div className=" flex flex-col gap-[10px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    拓展练习模式
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    将重要知识点和核心技能进行反复和进一步练习，短时间内有效率的提高学生的专业能力。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>
                <div className=" flex flex-col gap-[10px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    核心技能培养
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    发掘学生自身潜力，系统化培养且强化进入顶级艺术院校所需的核心技能。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>

                <div className=" flex flex-col gap-[10px] relative">
                  <div className="tracking-[1.12px] leading-[1.75rem] font-medium">
                    沉浸式模拟
                  </div>
                  <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium ">
                    通过高造诣的日本教师授课，营造日本大学・大学院美术专业的课堂氛围，让学生理解并掌握日本的美术思维模式，为成功进入日本顶级艺术院校打下坚实的基础。
                  </div>
                  <img
                    className="absolute top-[3px] -left-[25px] w-[1.5rem] h-[1.5rem]"
                    src="navigate_next.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 升学指导专攻 */}
          <div className="pt-[100px]" ref={sxzdRef} id="sxzd">
            <div className="text-[20px] md:text-[2.25rem] tracking-[10px] md:tracking-[2px] leading-[3.75rem] font-medium">
              <TextAnimation text="升学指导专攻"></TextAnimation>
            </div>

            <div className="px-[50px] md:px-0 flex flex-col md:grid grid-cols-4 gap-[24px] pt-[56px] ">
              <div className="flex flex-col gap-[24px]">
                <img
                  className="hidden md:block w-[16.5rem] h-[10.5rem] object-cover"
                  src="image 3.png"
                />
                <img src="/sxzdP1.png" className="w-full md:hidden" />
                <div className="text-[16px] tracking-[1.12px] leading-[28px] font-medium">
                  纯艺方向
                </div>
                <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium">
                  日本画及文物修复｜版画｜陶艺｜雕塑｜油画｜先端艺术
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                <img
                  className="hidden md:block w-[16.5rem] h-[10.5rem] object-cover"
                  src="image 6.png"
                />
                <img src="/sxzdP2.png" className="w-full  md:hidden" />
                <div className="text-[16px] tracking-[1.12px] leading-[28px] font-medium">
                  设计方向
                </div>
                <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium">
                  平面设计
                  视觉传达｜产品设计｜空间演出｜染织｜环境设计｜建筑｜服装设计
                  技术 品牌运营｜舞台美术
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                <img
                  className="hidden md:block w-[16.5rem] h-[10.5rem] object-cover"
                  src="image 7.png"
                />
                <img src="/sxzdP3.png" className="w-full  md:hidden" />
                <div className="text-[16px] tracking-[1.12px] leading-[28px] font-medium">
                  数媒方向
                </div>
                <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium">
                  动画｜写真｜电影｜ACG｜插画 絵本｜情报设计
                </div>
              </div>
              <div className="flex flex-col gap-[24px]">
                <img
                  className="hidden md:block w-[16.5rem] h-[10.5rem] object-cover"
                  src="image 8.png"
                />
                <img src="/sxzdP4.png" className="w-full  md:hidden" />
                <div className="text-[16px] tracking-[1.12px] leading-[28px] font-medium">
                  文艺方向
                </div>
                <div className="text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium">
                  教育学 美术教育｜艺术文化 艺术学 艺术史｜创造构想 KMD｜GAP
                </div>
              </div>
            </div>
          </div>

          {/* 学部课程 */}
          <div className="pt-[100px] pb-[80px]" ref={xbkcRef} id="xbkc">
            <div className="text-[20px] md:text-[2.25rem] tracking-[10px] md:tracking-[2px] leading-[3.75rem] font-medium">
              <TextAnimation text="学部课程"></TextAnimation>
            </div>
            {/* 手机端学部课程 */}
            <div className="flex flex-col md:hidden gap-[56px]">
              {/* 素描课程 */}
              <div className="flex flex-col gap-[22px] pt-[30px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">素描课程</p>
                  <p className="tracking-[1.12px]">Drawing course</p>
                </div>
                <div className="text-[10px] tracking-[1.12px] leading-[18px]">
                  <p>手部素描/静物素描</p>
                  <p>目标学院对应的素描要求</p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  日本的美术类大学对学生的素描要求与国内有很大的区别。我们的素描课程将会向学生详细解读手部骨骼肌肉的造型与表现、分析构图、不同物体的材质表现区别等知识和技法，通过学习和训练日本特色的素描方式，加强学生的基础笔法能力，提高学生对于静物的观察和刻画水平，使学生能够快速领会日本美术类大学的得分要点，做到在有限的考试时间内使画面达到最佳的表现形式。
                </div>
              </div>

              {/* 感觉试验 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">感觉试验</p>
                  <p className="tracking-[1.12px]">
                    Visual <br /> Experimentation
                  </p>
                </div>
                <div className="text-[10px] tracking-[1.12px] leading-[18px]">
                  <p>基础训练/针对式练习</p>
                  <p>目标学院对应的能力要求</p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  感觉试验是武藏野美术大学映像科特有的考试。此考试旨在考察学生的想象力，对情景的表现力，以及对绘画和文章综合表现手法。
                </div>
              </div>

              {/* 设计课程 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">设计课程</p>
                  <p className="tracking-[1.12px]">Design course</p>
                </div>
                <div className="text-[10px] tracking-[1.12px] leading-[18px]">
                  <p>色彩构成、平面构成、立体构成</p>
                  <p>根据主题进行画面构成</p>
                  <p>学习抽象表现形式</p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  我们通过总结日本美术大学多年来的考核内容，教授构成的基础概念和色彩运用，提升学生的专业能力。
                </div>
              </div>

              {/* 面试、小论文指导 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">面试、小论文指导</p>
                  <p className="tracking-[1.12px]">
                    Interview <br /> & Essay Writing
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  通过多次模拟练习和面试礼仪训练，提高学生的面试水平。由专业老师指导学生快速提高小论文的撰写水平。
                </div>
              </div>

              {/* 美术专业日语培训 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">美术专业日语培训</p>
                  <p className="tracking-[1.12px]">
                    Japanese Language <br /> For Art Majors
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  我们提供专门针对应试的日语特别辅导，提高学生的日语能力，同时教授专业的日语美术词汇，帮助学生更从容地应对面试的考验。
                </div>
              </div>
            </div>
            {/* 网页端学部课程 */}
            <div className="hidden md:grid grid-cols-12 gap-[24px] pt-[50px] ">
              <div className="col-span-1"></div>
              <div className="col-span-10 ">
                <div className="flex flex-col w-full gap-[80px]">
                  {/*素描课程*/}
                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">素描课程</p>
                        <p className="tracking-[1.12px]">Drawing course</p>
                      </div>
                      <div className="text-[11px] tracking-[1.12px] leading-[25px] font-medium ">
                        <p>手部素描/静物素描</p>
                        <p>目标学院对应的素描要求</p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      日本的美术类大学对学生的素描要求与国内有很大的区别。不同于国内，手部素描和静物素描在各学校的考题里出现较多。我们的素描课程将会向学生详细解读手部骨骼肌肉的造型与表现、分析构图、不同物体的材质表现区别等知识和技法，通过学习和训练日本特色的素描方式，加强学生的基础笔法能力，提高学生对于静物的观察和刻画水平，使学生能够快速领会日本美术类大学的得分要点，做到在有限的考试时间内使画面达到最佳的表现形式。
                    </div>
                  </div>

                  {/*感觉试验*/}
                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">感觉试验</p>
                        <p className="tracking-[1.12px]">
                          Visual Experimentation
                        </p>
                      </div>
                      <div className="text-[11px] tracking-[1.12px] leading-[25px] font-medium ">
                        <p>手部素描/静物素描</p>
                        <p>目标学院对应的素描要求</p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      感觉试验是武藏野美术大学映像科特有的考试。
                      <br />
                      考生根据考题中给出的词句等线索，根据自己的联想出的事件和场景，在纸上画出文字与绘画的组合表现图。
                      <br />
                      此考试旨在考察学生的想象力，对情景的表现力，以及对绘画和文章综合表现手法。
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">设计课程</p>
                        <p className="tracking-[1.12px]">Design course </p>
                      </div>
                      <div className="text-[11px] tracking-[1.12px] leading-[25px] font-medium ">
                        <p>色彩构成、平面构成、立体构成 </p>
                        <p>根据主题进行画面构成</p>
                        <p>学习抽象表现形式</p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      日本的美术类大学专业开设考试，主要考察学生对平面构成、立体构成、色彩构成的基础知识的掌握。我们通过总结日本美术大学多年来的考核内容，在课程中会教授构成的基础概念，色彩的运用，掌握各要素的对比调和、对称均衡、比例、节奏、韵律、多样、统一等构成手法，同时训练相应的技法。根据学生的不同专攻方向，和平面、工业、建筑、媒体等学科的的考试的不同出题方式，我们会对学生做出针对性的分类指导，全面提升专业能力。
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">面试、小论文指导</p>
                        <p className="tracking-[1.12px]">
                          Interview <br />& Essay Writing
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      通过相关老师的专业指导，教授专业日语词汇，进行多次模拟练习，增强学生的目的意识，辅以灵活的应答技巧和面试礼仪训练，在短时间内提高学生的面试水平。
                      根据日本美术考试的要求，由专业老师训练学生的思维方式，分析能力，知识范围，独创性等，快速提高学生小论文的撰写水平。
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">美术专业日语培训</p>
                        <p className="tracking-[1.12px]">
                          Japanese Language <br /> For Art Majors
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      对于志在报考日本顶级艺术院校的学生来说，除了提高美术水平，留学生考试（EJU）和日本语能力考试（JLPT）也同样是一道难关。为了实现学生的艺术梦想，让考生在日语考试中取得理想的分数，我们还提供了专门针对应试的日语特别辅导，有效率的提高学生的日语能力，帮助学员解决语言难关。另外，在日语课程中我们通过教授学生专业的日语美术词汇，日语表达方式，使学生能够更好地理解日本艺术的特质，掌握日本美术考试的要点，更从容地应对面试的考验，为将来在日本进行更深层次的艺术求学而打下牢固的基础。
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>

          {/* 大学院课程 */}
          <div className="pb-[80px]" ref={dxykcRef} id="dxykc">
            <div className="text-[20px] md:text-[2.25rem] tracking-[10px] md:tracking-[2px] leading-[3.75rem] font-medium">
              <TextAnimation text="大学院课程" />
            </div>

            {/* 手机端大学院课程 */}
            <div className="flex flex-col md:hidden gap-[56px]">
              {/* 研究计划书 */}
              <div className="flex flex-col gap-[22px] pt-[30px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">研究计划书</p>
                  <p className="tracking-[1.12px]">Research Plan</p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  学院将安排专业老师为学生收集并分析各个大学的资料，提供使用的研究计划书写作指导，传授前辈的写作经验，根据学生的志向和能力，提供专业的具体建议，确立研究计划书的方向，让学生尽快进入应试状态。
                </div>
              </div>

              {/* 作品集辅导课程 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">作品集辅导课程</p>
                  <p className="tracking-[1.12px]">
                    Portfolio <br /> Creation Course
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  为学生作品集的制作提供专业指导，从作品的次序排列、展示手法、排版装帧到各作品的日语说明文等都一一指导，帮助学生量身定做符合学校风格的作品集，获得教授的青睐。
                </div>
              </div>

              {/* 制作作品集 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">制作作品集</p>
                  <p className="tracking-[1.12px]">
                    Portfolio <br /> Publishing Course
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  学院提供全面的支持，帮助学生制作并发布作品，并安排艺术展览和美术大学的参观考察活动，专业老师也会对各类作品制作提供建议。
                </div>
              </div>

              {/* 面试指导 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">面试指导</p>
                  <p className="tracking-[1.12px]">Guide for Interviews</p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  通过相关老师的专业指导和多次模拟面试练习，辅以灵活的应答技巧，帮助学生提高面试水平，增强目的意识。
                </div>
              </div>

              {/* 美术专业日语培训 */}
              <div className="flex flex-col gap-[22px]">
                <div className="text-[16px] leading-[25px]">
                  <p className="tracking-[2px]">美术专业日语培训</p>
                  <p className="tracking-[1.12px]">
                    Japanese Language <br /> For Art Majors
                  </p>
                </div>
                <div className="px-[50px] text-[12px] tracking-[1.12px] leading-[25px] font-normal">
                  针对应试的日语辅导，提高学生的日语能力，解决语言难关。日语课程中教授美术相关词汇和表达方式，帮助学生更好地理解日本艺术，并应对面试挑战。
                </div>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-12 gap-[24px] pt-[50px] ">
              <div className="col-span-1"></div>
              <div className="col-span-10 ">
                <div className="flex flex-col w-full gap-[80px]">
                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">研究计划书</p>
                        <p className="tracking-[1.12px]">Research Plan</p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      学院将安排专业老师为学生收集并分析各个大学的资料，提供使用的研究计划书写作指导，传授前辈的写作经验，
                      提点事半功倍的写作方法，根据学生的志向和能力，提供专业的具体建议，确立研究计划书的方向，让学生能又
                      快又好的制作出专业的研究计划说，尽快进入应试状态。{" "}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">作品集辅导课程</p>
                        <p className="tracking-[1.12px]">
                          Portfolio
                          <br />
                          Creation Course
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      为学生作品集的制作提供专业的指导课程。从作品的次序排列、展示手法、作品集的排版装帧，到各作品的日语
                      说明文等都一一指导，针对不同的志愿学校和不同的专业方向，帮助学生量身定做符合该校风格和要求的作品集，
                      获得教授的青睐。{" "}
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">制作作品集</p>
                        <p className="tracking-[1.12px]">
                          Portfolio <br />
                          Publishing Course
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      全力协助学生制作和发表作品，为学生提供多方面，多层次的引导和帮助。学院会提供各种艺术展览，美术大学的参观考察活动，专业老师也会对各类型作品的制作提供建议和帮助。
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">面试指导</p>
                        <p className="tracking-[1.12px]">
                          Guide for Interviews
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      通过相关老师的专业指导，教授专业日语词汇，进行多次模拟面试练习，增强学生的目的意识，辅以灵活的应答技巧，在短时间内提高学生的面试水平。
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-[24px]">
                    <div className="col-span-3 flex flex-col gap-[24px]">
                      <div className="text-[20px] leading-[30px] font-medium">
                        <p className="tracking-[2px]">美术专业日语培训</p>
                        <p className="tracking-[1.12px]">
                          Japanese Language <br /> For Art Majors
                        </p>
                      </div>
                    </div>
                    <div className="col-span-7 text-[1rem] tracking-[1.12px] leading-[1.875rem] font-medium ">
                      对于志在报考日本顶级艺术院校的学生来说，除了提高美术水平，留学生考试（EJU）和日本语能力考试（JLPT）也同样是一道难关。为了实现学生的艺术梦想，让考生在日语考试中取得理想的分数，我们还提供了专门针对应试的日语特别辅导，有效率的提高学生的日语能力，帮助学员解决语言难关。另外，在日语课程中我们通过教授学生专业的日语美术词汇，日语表达方式，使学生能够更好地理解日本艺术的特质，掌握日本美术考试的要点，更从容地应对面试的考验，为将来在日本进行更深层次的艺术求学而打下牢固的基础。
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
