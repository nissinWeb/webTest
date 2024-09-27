import { Link } from "react-router-dom";
import image10 from "../../assets/image10.png";
import { Button } from "../../components/Button";
import { ArrowRight, ChevronRight } from "lucide-react";
import TextAnimation from "../../components/TextAnimation";

export function HomeAbout() {
  return (
    <div className="relative min-h-[600px] w-full bg-white ">
      {/* 按钮和主题 */}
      <div className="relative flex justify-between z-[1] ">
        {/* 主题 */}
        <div>
          <div className="h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-black text-4xl tracking-[20.00px] leading-[60px] whitespace-nowrap">
            关于日进
          </div>
          <div className=" w-[215px] h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-normal text-black text-[15px] tracking-[1.12px] leading-[60px] whitespace-nowrap">
            寄语&nbsp;&nbsp;|&nbsp;&nbsp;核心优势&nbsp;&nbsp;|&nbsp;&nbsp;学院理念
          </div>
        </div>
        {/* 右箭头按钮 */}
        <div className="ml-auto flex-shrink-0">
          <Link to="/about">
            <Button variant="ghost" size="icon">
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* pic+大slogan */}
      <div className="relative  -translate-y-[32px] min-h-[190px] ">
        {/* pic */}
        <div className="hidden relative md:flex justify-end ">
          <img className="w-full  max-w-[617px] " src={image10} />
        </div>

        {/* 描こう、夢を。 */}
        <div className="absolute bottom-9 lg:left-[22%] text-black  text-[40px] md:text-[64px] font-medium leading-[60px] tracking-[10px] ">
          <div className=" relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
            <TextAnimation text="描こう、夢を。" />
          </div>
        </div>
      </div>

      {/* 文案 */}
      <div className="flex justify-end ">
        <p className=" w-[840px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-transparent text-base text-justify tracking-[1.50px] leading-[33px]">
          <span className="text-black tracking-[0.24px]">
            日进艺术学院成立于2017年，是日本最早的以专业、专心、专注为核心，专攻留学生美术升学辅导的机构之一。我们的核心教师团队在留学生升学辅导领域，均有10年以上的工作经验。教育需要长期的沉淀与积累，希望能用我们这么多年的沉淀与积累帮助到大家。
          </span>
        </p>
      </div>

      {/* 5个卖点 */}
      <div className="relative sm:min-w-[750px] h-[152px] lg:absolute lg:right-[114px] mt-[53px] overflow-y-hidden overflow-x-scroll scrollbar-none">
        <div className="w-[188px] h-14 left-0 top-0 absolute">
          <div className="left-[22px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            日籍外教&中国教师，
            <br />
            联合专业指导
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute">
            <ChevronRight />
          </div>
        </div>

        <div className="w-[158px] h-14 left-0 top-[96px] absolute">
          <div className="left-[22px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            让家长学生安心的
            <br />
            一站式全程服务
          </div>
          <div className="w-6 h-6 left-0 top-[1px] absolute">
            <ChevronRight />
          </div>
        </div>

        <div className="w-[187px] h-14 left-[288px] top-0 absolute">
          <div className="left-[22px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            中日双校区无缝衔接的
            <br />
            升学管理模式
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute">
            <ChevronRight />
          </div>
        </div>

        <div className="w-[159px] h-14 left-[288px] top-[96px] absolute">
          <div className="left-[23px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            日本艺术留学机构
            <br />
            首家自主研发教材
          </div>
          <div className="w-6 h-6 left-0 top-[1px] absolute">
            <ChevronRight />
          </div>
        </div>

        <div className="w-[174px] h-14 left-[576px] top-0 absolute">
          <div className="left-[21px] top-0 absolute text-black text-base font-medium font-['Noto Sans SC'] leading-7 tracking-wide">
            多对一的个性化定制
            <br />
            教育服务模式
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
