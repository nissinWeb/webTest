import { useEffect, useRef, useState } from "react";
import TextAnimation from "../components/TextAnimation";

export function AboutUs() {
  // 创建 ref 来定位到每个部分
  const messageRef = useRef<HTMLDivElement>(null);
  const coreAdvantagesRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const messageRefW = useRef<HTMLDivElement>(null);
  const coreAdvantagesRefW = useRef<HTMLDivElement>(null);
  const philosophyRefW = useRef<HTMLDivElement>(null);

  // 使用 state 来保存当前可见的部分
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    console.log("Active section changed to:", activeSection); // 输出当前的activeSection
  }, [activeSection]);
  useEffect(() => {
    console.log(messageRef.current); // 应该输出对应的 DOM 元素
    console.log(coreAdvantagesRef.current);
    console.log(philosophyRef.current);
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
    const sections = [messageRef, coreAdvantagesRef, philosophyRef];
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
    <div className="flex flex-col px-[20px]">
      {/* 手机端 */}
      <div className="flex sm:hidden flex-col gap-[60px]">
        {/* 侧边导航栏 */}
        <div className="fixed top-[200px] right-[10px] flex flex-col gap-[50px] z-[10]">
          <div className="rotate-90 text-[12px] tracking-[1.12px] w-[56px] font-medium">
            关于日进
          </div>
          <div className="flex flex-col justify-start gap-[60px] items-center font-normal">
            {/* 寄语 */}
            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] w-[28px] inline-block relative ${
                activeSection === "message"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(messageRef)}
            >
              寄语
            </div>

            {/* 核心优势 */}
            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
                activeSection === "coreAdvantages"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(coreAdvantagesRef)}
            >
              核心优势
            </div>

            {/* 学院理念 */}
            <div
              className={`rotate-90 text-[12px] tracking-[1.12px] relative ${
                activeSection === "philosophy"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              } after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-300 after:scale-x-0 after:origin-left`}
              onClick={() => scrollToSection(philosophyRef)}
            >
              学院理念
            </div>
          </div>
        </div>

        {/* 寄语  */}
        <div ref={messageRef} id="message">
          <div className="relative h-[230px] pt-[20px] flex flex-col justify-end">
            <div className="absolute top-[15px] text-[40px] tracking-[10px] leading-[3.75rem] font-medium  text-black">
              <TextAnimation text="描こう、" />
              <TextAnimation text="夢を。" />
            </div>
            <div>
              <img src="/imgiphone.png" alt="" />
            </div>
          </div>
          <div className="text-[13px] pt-[30px] px-[50px] tracking-[1.12px] leading-[28px] font-medium">
            <p className="m-0">
              日进艺术学院成立于2017年，是日本最早的以专业、专心、专注为核心，专攻留学生美术升学辅导的机构之一。
            </p>
            <p className="m-0">
              我们的核心教师团队在留学生升学辅导领域，均有10年以上的工作经验。教育需要长期的沉淀与积累，希望能用我们这么多年的沉淀与积累帮助到大家。
            </p>
            <p className="m-0">
              自日进艺术学院成立以来，我们已经帮助500名以上的学生成功升学，日进的合格学员几乎遍布日本各大知名美院。八年来，我们的学生从最初的高中生、大学生到踏上社会，有些成为了企业的骨干，有些成为知名企业的设计师，有些人成功创业，有些人上任大学教员……我们陪同、见证了学员们的成长和艺术求学之路上的种种经历。
            </p>
            <p className="m-0">
              一路走来，我们很荣幸分享着他们的痛苦与快乐，挫折与荣耀也越发深刻体会到，在一个人人生中最重要的时期，和他(她)相遇，去见证一个人的成长、参与帮助提升他生命原有的轨迹，是多么有意义的一件事情！
            </p>
            <p className="m-0">
              我们珍惜每一次相遇，感谢每一位曾经遇到的，和即将遇到的你。
            </p>
          </div>
        </div>

        {/* 核心优势 */}
        <div ref={coreAdvantagesRef} id="coreAdvantages">
          <div className="flex flex-col">
            <div className="tracking-[10px] text-[20px] h-[45px]">
              <TextAnimation text="核心优势"></TextAnimation>
            </div>
            <div className="tracking-[2px] text-[16px]">
              <TextAnimation text="选择日进艺术学院的五大优势"></TextAnimation>
            </div>
          </div>
          <div className="flex flex-col pt-[40px]">
            <div>
              <img
                src="/hxys1.png"
                className="w-[270px] -translate-x-[20px] "
              />

              <div className=" flex flex-col px-[50px] gap-[40px] pt-[30px]">
                <div className="text-[16px] tracking-[1.12px] leading-[28px]">
                  日籍外教&中国教师，
                  <br />
                  联合专业指导
                </div>
                <div className="text-[13px] tracking-[1.12px] leading-[25px]">
                  在日进艺术学院，我们有日本顶级美院出身的日籍外教及中国老师，多在日本著名美大担任教学职位。日中专业教学老师多对一联合教学，为学生带来最专业的日本艺术升学指导，提供高水准的教学服务。
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-[40px]">
            <div>
              <img
                src="/hxys2.png"
                className="w-[270px] -translate-x-[20px] "
              />

              <div className=" flex flex-col px-[50px] gap-[40px] pt-[30px]">
                <div className="text-[16px] tracking-[1.12px] leading-[28px]">
                  中日双校区无缝衔接的 <br />
                  升学管理模式
                </div>
                <div className="text-[13px] tracking-[1.12px] leading-[25px]">
                  日进艺术学院在中国广州和日本东京均设有校区，国内报名的学员在赴日前即可开始课程的线下学习，赴日后学员情况将同步给日本校区老师，无缝衔接，可高效地继续在日本的学习，准备考试。{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[40px]">
            <div>
              <img
                src="/hxys3.png"
                className="w-[270px] -translate-x-[20px] "
              />

              <div className=" flex flex-col px-[50px] gap-[40px] pt-[30px]">
                <div className="text-[16px] tracking-[1.12px] leading-[28px]">
                  多对一的个性化定制 <br />
                  教育服务模式
                </div>
                <div className="text-[13px] tracking-[1.12px] leading-[25px]">
                  日进艺术学院为每位学员提供个性化定制教育服务，学员不仅能自由选择专业课老师，还可以享受到其他专业老师的文书指导和日语指导，不仅有效保障了教学内容的专业性，也规避了升学指导服务覆盖面不够的问题。
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[40px]">
            <div>
              <img
                src="/hxys4.png"
                className="w-[270px] -translate-x-[20px] "
              />

              <div className=" flex flex-col px-[50px] gap-[40px] pt-[30px]">
                <div className="text-[16px] tracking-[1.12px] leading-[28px]">
                  让家长学生安心的 <br />
                  一站式全程服务
                </div>
                <div className="text-[13px] tracking-[1.12px] leading-[25px]">
                  从留学前到留学后，我们始终陪伴着学生，为学生提供最可靠的一站式全程服务。选择了我们，就是选择了留学路上的一份妥帖和安心。{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[40px]">
            <div>
              <img
                src="/hxys5.png"
                className="w-[270px] -translate-x-[20px] "
              />

              <div className=" flex flex-col px-[50px] gap-[40px] pt-[30px]">
                <div className="text-[16px] tracking-[1.12px] leading-[28px]">
                  日本艺术留学机构 <br />
                  首家自主研发教材
                </div>
                <div className="text-[13px] tracking-[1.12px] leading-[25px]">
                  我们清楚自己的优势在于多年的沉淀与积累。为充分发挥这一优势，日进艺术学院动员核心教师骨干，自主研发教材，旨在为学生提供更加长久稳定的高质量教育。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 学院理念 */}
        <div
          className="flex flex-col gap-[40px]"
          ref={philosophyRef}
          id="philosophy"
        >
          <div className="tracking-[10px] text-[20px] ">
            <TextAnimation text="学院理念"></TextAnimation>
          </div>

          <div className="px-[50px] tracking-[1.12px] text-[13px] leading-[28px] ">
            引导每一位学员成为从借鉴到创造、从依赖到独立、从被动学习到主动求索、从地域化到全球化的国际艺术人才。
            我们希望为具有国际性开放思维的未来艺术界精英・领导者们搭建一个平台，构建一个国际化艺术交流的社区。
            这个社区的每一位成员具有包容(Diversity)、专业(Professionalism)、卓越(Excellence)、尊重(Respect)、
            创造（Creativity的）品格，他们互相交流，相互提高，为推动艺术界的交流与发展做出贡献。
          </div>

          <div className="flex flex-col gap-[32px] pb-[45px]">
            <div className="grid grid-cols-5 gap-[50px]">
              <div className="col-span-2 text-[16px] leading-[30px] tracking-[2px]">
                包容
                <br />
                Diversity
              </div>
              <div className="col-span-3 text-[11px] tracking-[1px] leading-[18px]">
                我们重视和感激不同文化背景和个人品质所带来的多样性，鼓励每个教师和每个学生展示他们的独特性。
              </div>
            </div>
            <div className="grid grid-cols-5 gap-[50px]">
              <div className="col-span-2 text-[16px] leading-[30px] tracking-[2px]">
                卓越
                <br />
                Excellence
              </div>
              <div className="col-span-3 text-[11px] tracking-[1px] leading-[18px]">
                我们立志于提供高层次的教育服务，并通过设定长期计划，发掘新思想，建立发展项目，增加可靠度等多方面的改进来实现此目标。
              </div>
            </div>
            <div className="grid grid-cols-5 gap-[50px] ">
              <div className="col-span-2 text-[16px] leading-[30px] tracking-[2px]">
                创造
                <br />
                Creativity
              </div>
              <div className="col-span-3 text-[11px] tracking-[1px] leading-[18px]">
                我们将创造性视为进入艺术教育事业最高殿堂的核心，努力为发掘创意天赋和形成创造性思维制造提供更多的机会。
              </div>
            </div>
            <div className="grid grid-cols-5 gap-[50px]">
              <div className="col-span-2 text-[16px] leading-[30px] tracking-[2px]">
                专业
                <br />
                Professionalism
              </div>
              <div className="col-span-3 text-[11px] tracking-[1px] leading-[18px]">
                我们竭尽全力追求艺术本身及艺术教育事业的专业性，用敬业和坚持在工作岗位上展现我们的专业性。鼓励每个教师和每个学生展示他们的独特性。
              </div>
            </div>
            <div className="grid grid-cols-5 gap-[50px]">
              <div className="col-span-2 text-[16px] leading-[30px] tracking-[2px]">
                尊重
                <br />
                Respect
              </div>
              <div className="col-span-3 text-[11px] tracking-[1px] leading-[18px]">
                我们尊重每个个体，并且努力建立和保持一个平等，友善，重视个人价值的教育环境。
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 网页端 */}
      <div className="hidden sm:flex relative flex-col items-center gap-[100px] py-[100px] px-[100px]">
        <div id="messageW" ref={messageRefW}>
          <div className="relative grid grid-cols-12">
            <div className="col-span-2 z-10">
              <div className="absolute top-1/2  text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black">
                <TextAnimation text="描こう、夢を。" />
              </div>
            </div>
            <div className="col-span-10 relative">
              <img className="w-full h-auto object-cover" src="image 10.png" />
            </div>
          </div>

          <div className="grid grid-cols-12 pt-[30px]">
            <div className="col-span-3"></div>{" "}
            <div className="col-span-9 tracking-[1.5px] leading-[2.063rem] font-medium">
              <p className="m-0">
                日进艺术学院成立于2017年，是日本最早的以专业、专心、专注为核心，专攻留学生美术升学辅导的机构之一。
              </p>
              <p className="m-0">
                我们的核心教师团队在留学生升学辅导领域，均有10年以上的工作经验。教育需要长期的沉淀与积累，希望能用我们这么多年的沉淀与积累帮助到大家。
              </p>
              <p className="m-0">
                自日进艺术学院成立以来，我们已经帮助500名以上的学生成功升学，日进的合格学员几乎遍布日本各大知名美院。八年来，我们的学生从最初的高中生、大学生到踏上社会，有些成为了企业的骨干，有些成为知名企业的设计师，有些人成功创业，有些人上任大学教员……我们陪同、见证了学员们的成长和艺术求学之路上的种种经历。
              </p>
              <p className="m-0">
                一路走来，我们很荣幸分享着他们的痛苦与快乐，挫折与荣耀也越发深刻体会到，在一个人人生中最重要的时期，和他(她)相遇，去见证一个人的成长、参与帮助提升他生命原有的轨迹，是多么有意义的一件事情！
              </p>
              <p className="m-0">
                我们珍惜每一次相遇，感谢每一位曾经遇到的，和即将遇到的你。
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-[128px] items-center w-full text-center text-[2.25rem] text-black font-noto-sans-sc">
          <div
            className="relative w-[72rem] h-[62.688rem]"
            id="coreAdvantagesW"
            ref={coreAdvantagesRefW}
          >
            <div className="absolute top-[0rem] left-[0rem] w-[28.75rem] h-[4.188rem]">
              <div className="absolute top-[0rem] left-[calc(50%_-_230px)] tracking-[2px] leading-[3.75rem] font-medium">
                核心优势
              </div>
              <div className="absolute top-[0.438rem] left-[calc(50%_-_54px)] text-[1.25rem] tracking-[2px] leading-[3.75rem] font-medium whitespace-nowrap">
                选择日进艺术学院的五大优势
              </div>
            </div>
            <div className="absolute top-[7rem] left-[17.938rem] w-[54.063rem] h-[55.688rem] text-left text-[1rem]">
              <div className="absolute top-[12.5rem] left-[0.063rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">{`日籍外教&中国教师，`}</p>
                <p className="m-0">联合专业指导</p>
              </div>
              <div className="absolute top-[42.5rem] left-[0.063rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">让家长学生安心的</p>
                <p className="m-0">一站式全程服务</p>
              </div>
              <div className="absolute top-[12.5rem] left-[18.063rem] tracking-[0.5px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">中日双校区无缝衔接的</p>
                <p className="m-0">升学管理模式</p>
              </div>
              <div className="absolute top-[42.5rem] left-[18.125rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">日本艺术留学机构</p>
                <p className="m-0">首家自主研发教材</p>
              </div>
              <div className="absolute top-[12.5rem] left-[36rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                <p className="m-0">多对一的个性化定制</p>
                <p className="m-0">教育服务模式</p>
              </div>
              <div className="absolute top-[47.563rem] left-[0.063rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                从留学前到留学后，我们始终陪伴着学生，为学生提供最可靠的一站式全程服务。选择了我们，就是选择了留学路上的一份妥帖和安心。
              </div>
              <div className="absolute top-[17.563rem] left-[0.063rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                在日进艺术学院，我们有日本顶级美院出身的日籍外教及中国老师，多在日本著名美大担任教学职位。日中专业教学老师多对一联合教学，为学生带来最专业的日本艺术升学指导，提供高水准的教学服务。
              </div>
              <div className="absolute top-[17.563rem] left-[18.063rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                日进艺术学院在中国广州和日本东京均设有校区，国内报名的学员在赴日前即可开始课程的线下学习，赴日后学员情况将同步给日本校区老师，无缝衔接，可高效地继续在日本的学习，准备考试。
              </div>
              <div className="absolute top-[47.563rem] left-[18.125rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                我们清楚自己的优势在于多年的沉淀与积累。为充分发挥这一优势，日进艺术学院动员核心教师骨干，自主研发教材，旨在为学生提供更加长久稳定的高质量教育。
              </div>
              <img
                className="absolute top-[30rem] left-[0rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src="image 8.png"
              />
              <div className="absolute top-[17.563rem] left-[36rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                日进艺术学院为每位学员提供个性化定制教育服务，学员不仅能自由选择专业课老师，还可以享受到其他专业老师的文书指导和日语指导，不仅有效保障了教学内容的专业性，也规避了升学指导服务覆盖面不够的问题。
              </div>
              <img
                className="absolute top-[0rem] left-[0rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src="/image 3.png"
              />
              <img
                className="absolute top-[0rem] left-[18rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src="/image 6.png"
              />
              <img
                className="absolute top-[30rem] left-[18rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src="/image 9.png"
              />
              <img
                className="absolute top-[0rem] left-[36rem] w-[16.5rem] h-[10.5rem] object-cover"
                alt=""
                src="/image 7.png"
              />
            </div>
          </div>

          <div
            className="relative w-[70.438rem] h-[42.688rem] text-left"
            id="philosophyW"
            ref={philosophyRefW}
          >
            <div className="absolute top-[0rem] left-[calc(50%_-_563.5px)] tracking-[2px] leading-[3.75rem] font-medium">
              学院理念
            </div>
            <div className="absolute top-[0.5rem] left-[17.938rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[52.5rem]">
              引导每一位学员成为从借鉴到创造、从依赖到独立、从被动学习到主动求索、从地域化到全球化的国际艺术人才。
              我们希望为具有国际性开放思维的未来艺术界精英・领导者们搭建一个平台，构建一个国际化艺术交流的社区。
              这个社区的每一位成员具有包容(Diversity)、专业(Professionalism)、卓越(Excellence)、尊重(Respect)、
              创造（Creativity的）品格，他们互相交流，相互提高，为推动艺术界的交流与发展做出贡献。
            </div>
            <div className="absolute top-[14.313rem] left-[5.938rem] w-[58.5rem] h-[28.375rem] text-[1.25rem]">
              <div className="absolute top-[0rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">包容</p>
                  <p className="m-0">Diversity</p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  我们重视和感激不同文化背景和个人品质所带来的多样性，鼓励每个教师和每个学生展示他们的独特性。
                </div>
              </div>
              <div className="absolute top-[6rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">卓越</p>
                  <p className="m-0">Excellence</p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  我们立志于提供高层次的教育服务，并通过设定长期计划，发掘新思想，建立发展项目，增加可靠度等多方面的改进来实现此目标。
                </div>
              </div>
              <div className="absolute top-[11.875rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">创造</p>
                  <p className="m-0">Creativity</p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  我们将创造性视为进入艺术教育事业最高殿堂的核心，努力为发掘创意天赋和形成创造性思维制造提供更多的机会。
                </div>
              </div>
              <div className="absolute top-[17.875rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">专业</p>
                  <p className="m-0">Professionalism</p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  我们竭尽全力追求艺术本身及艺术教育事业的专业性，用敬业和坚持在工作岗位上展现我们的专业性。鼓励每个教师和每个学生展示他们的独特性。
                </div>
              </div>
              <div className="absolute top-[23.875rem] left-[0rem] w-[58.5rem] h-[4.5rem]">
                <div className="absolute top-[0rem] left-[calc(50%_-_468px)] tracking-[2px] leading-[1.875rem] font-medium">
                  <p className="m-0">尊重</p>
                  <p className="m-0">Respect</p>
                </div>
                <div className="absolute top-[0rem] left-[18rem] text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium text-justify inline-block w-[40.5rem] h-[4.5rem]">
                  我们尊重每个个体，并且努力建立和保持一个平等，友善，重视个人价值的教育环境。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
