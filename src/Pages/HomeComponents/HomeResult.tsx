import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ArrowRight } from "lucide-react";
import TextAnimation from "../../components/TextAnimation";

export function HomeResult() {
  return (
    <div className="flex flex-col gap-[43px] relative  w-full bg-white ">
      {/* 按钮和主题 */}
      <div className="grid grid-cols-[3fr_8fr_1fr] relative z-[1] ">
        {/* 主题 */}
        <div>
          <div className="h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-black text-4xl tracking-[20.00px] leading-[60px] whitespace-nowrap">
            合格实绩
          </div>
          <div className=" w-[215px] h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-normal text-black text-[15px] tracking-[1.12px] leading-[60px] whitespace-nowrap">
            合格实绩&nbsp;&nbsp;|&nbsp;&nbsp;合格采访
          </div>
        </div>

        {/* 文案 */}

        <div className="max-w-[52.5rem] relative text-[1rem] tracking-[1.5px] leading-[2.063rem] font-medium font-noto-sans-sc text-black text-justify inline-block h-[9.25rem]">
          <p className="m-0">日进美术学院，前往你梦想殿堂的第一级台阶。</p>
          <p className="m-0">
            我们用扎实的基础教学与个性化的辅导，将无数学员送入日本的各大名校。
          </p>
          <p className="m-0">以实绩为基础，做你的指路人。</p>
        </div>

        {/* 右箭头按钮 */}
        <div className="ml-auto flex-shrink-0">
          <Link to="/results">
            <Button variant="ghost" size="icon">
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* 六个大学的介绍 */}

      <div className="grid grid-cols-[3fr_9fr]">
        <div />

        <div className="w-full relative">
          <div className="flex flex-row items-start justify-center flex-wrap content-start gap-y-[40px] gap-x-[4.5rem] text-center">
            <div className=" relative flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[48px]">
                <div className="relative text-[3rem] tracking-[20px] leading-[3.75rem] font-medium  text-black text-center ">
                  <TextAnimation text="116" />
                </div>
                <div className="tracking-[1.5px] leading-[1.438rem] font-medium min-h-[48px]">
                  御三家日本顶级美大 <br />
                  +欧美世界级名校
                </div>
              </div>
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
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
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
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
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
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
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
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
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
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
              <div className="text-[0.75rem] tracking-[1.12px] leading-[1.438rem] text-left w-[13.5rem]">
                专攻服装专业的学校，通常指的是文化服装学院、文化学院大学、BFGU。这些大学在世界范围内的服装领域都具有非常高的名望。{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
