import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ArrowRight } from "lucide-react";

export function HomeSchedule() {
  return (
    <div className="flex flex-col gap-[47px] relative  w-full bg-white ">
      {/* 按钮和主题 */}
      <div className="relative flex justify-between z-[1] ">
        {/* 主题 */}
        <div>
          <div className="h-[60px] top-0 left-0 [font-family:'Noto_Sans_SC-Medium',Helvetica] font-medium text-black text-4xl tracking-[20.00px] leading-[60px] whitespace-nowrap">
            课程安排
          </div>
          <div className="relative text-[0.938rem] tracking-[1.12px] leading-[3.75rem] font-medium font-noto-sans-sc text-black whitespace-pre-wrap text-left flex items-center h-[3.5rem]">
            课程特色&nbsp;&nbsp;|&nbsp;&nbsp;学部课程&nbsp;&nbsp;|&nbsp;&nbsp;大学院课程
          </div>
        </div>
        {/* 右箭头按钮 */}
        <div className="ml-auto flex-shrink-0">
          <Link to="/schedule">
            <Button variant="ghost" size="icon">
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* schedule    */}
      <div className="grid grid-cols-[3fr_9fr]">
        <div></div>
        <div className="w-full relative flex flex-col items-start justify-center gap-[1.875rem] text-left text-[1rem] text-black font-noto-sans-sc">
          <div className="w-[52.5rem] relative h-[12.063rem]">
            <div className="absolute top-[0rem] left-[calc(50%_-_420px)] tracking-[1.5px] leading-[2.063rem] font-medium inline-block w-[52.5rem] h-[12.063rem]">
              在日进艺术学院，我们拥有最完善的课程体系。我们拥有最有经验的讲师团队，将会为每一位学员提供最专业的美术指导。同时，学院还开设有专门针对大学·大学院升学的日语考试对策课程，我们会根据学生的升学志愿、专攻方向和水平，为每一位学员量身定制属于自己的合格升学路线及教学内容。在日进艺术学院的课程现场，我们有来自日本一流美院的助教老师，为每一位学生和主讲老师搭建起无障碍的沟通桥梁。此外，在学生准备升学考试前，我们安排了专业的日籍面试指导老师，为学生提供最完备的面试模拟训练。
            </div>
          </div>
          <div className="self-stretch relative h-[23.188rem] -translate-x-[25px]">
            <div className="absolute top-[0rem] left-[0rem] w-[19.625rem] h-[11.25rem]">
              <div className="absolute top-[0rem] left-[1.563rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                学生本位主义授课
              </div>
              <div className="absolute top-[3.125rem] left-[1.563rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                重视老师与学生一对一的交流，把握每个学生的特点、特长、能力及专业报考要求，为每一个学生量身定制升学路线并安排升学辅导。
              </div>
              <img
                className="absolute top-[0.188rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/navigate_next.svg"
              />
            </div>
            <div className="absolute top-[0rem] left-[18rem] w-[19.625rem] h-[11.25rem]">
              <div className="absolute top-[0rem] left-[1.563rem] tracking-[0.5px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                任务型教学
              </div>
              <div className="absolute top-[3.125rem] left-[1.563rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                根据不同学生的发展方向，为学生量身定制学习任务及课题，注重让学生从实践及经验中提高自己的专业水平。
              </div>
              <img
                className="absolute top-[0.188rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/navigate_next.svg"
              />
            </div>
            <div className="absolute top-[0rem] left-[36rem] w-[19.563rem] h-[11.25rem]">
              <div className="absolute top-[0rem] left-[1.5rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                拓展练习模式
              </div>
              <div className="absolute top-[3.125rem] left-[1.5rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                将重要知识点和核心技能进行反复和进一步练习，短时间内有效率的提高学生的专业能力。
              </div>
              <img
                className="absolute top-[0.188rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/navigate_next.svg"
              />
            </div>
            <div className="absolute top-[11.938rem] left-[0rem] w-[19.625rem] h-[11.25rem]">
              <div className="absolute top-[0rem] left-[1.563rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[18.063rem] h-[1.563rem]">
                核心技能培养
              </div>
              <div className="absolute top-[3.125rem] left-[1.563rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                发掘学生自身潜力，系统化培养且强化进入顶级艺术院校所需的核心技能。
              </div>
              <img
                className="absolute top-[0.25rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/navigate_next.svg"
              />
            </div>
            <div className="absolute top-[11.938rem] left-[18rem] w-[19.688rem] h-[11.25rem]">
              <div className="absolute top-[0rem] left-[1.625rem] tracking-[1.12px] leading-[1.75rem] font-medium">
                沉浸式模拟
              </div>
              <div className="absolute top-[3.125rem] left-[1.625rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[16.5rem] h-[8.125rem]">
                通过高造诣的日本教师授课，营造日本大学・大学院美术专业的课堂氛围，让学生理解并掌握日本的美术思维模式，为成功进入日本顶级艺术院校打下坚实的基础。
              </div>
              <img
                className="absolute top-[0.25rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/navigate_next.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.437rem]">
            <div className="w-[10.438rem] relative h-[23.813rem]">
              <div className="absolute top-[12.5rem] left-[0.063rem] tracking-[1.12px] leading-[1.75rem] font-medium">
                纯艺方向
              </div>
              <div className="absolute top-[15.688rem] left-[0.063rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:5] [-webkit-box-orient:vertical] w-[10.375rem]">
                日本画及文物修复｜版画｜陶艺｜雕塑｜油画｜先端艺术
              </div>
              <img
                className="absolute top-[0rem] left-[0rem] w-[10.438rem] h-[10.5rem] object-cover"
                alt=""
                src="/image 3.png"
              />
            </div>
            <div className="w-[10.563rem] relative h-[23.5rem]">
              <div className="absolute top-[12.5rem] left-[0rem] tracking-[0.5px] leading-[1.75rem] font-medium inline-block w-[4.125rem]">
                设计方向
              </div>
              <div className="absolute top-[15.688rem] left-[0.063rem] text-[0.813rem] leading-[1.563rem] font-medium text-justify inline-block w-[10.5rem]">
                平面设计/视觉传达｜插画/絵本｜产品设计｜空间演出｜染织｜环境设计/建筑｜服装设计/技术/品牌运营｜舞台美术｜情报设计
              </div>
              <img
                className="absolute top-[0rem] left-[0.063rem] w-[10.5rem] h-[10.5rem] object-cover"
                alt=""
                src="/image 6.png"
              />
            </div>
            <div className="w-[10.563rem] relative h-[17.25rem]">
              <div className="absolute top-[12.5rem] left-[0rem] tracking-[1.12px] leading-[1.75rem] font-medium">
                数媒方向
              </div>
              <div className="absolute top-[15.688rem] left-[0rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium inline-block w-[10.563rem]">
                动画｜写真｜电影｜ACG
              </div>
              <img
                className="absolute top-[0rem] left-[0rem] w-[10.5rem] h-[10.5rem] object-cover"
                alt=""
                src="/image 7.png"
              />
            </div>
            <div className="w-[10.563rem] relative h-[20.375rem]">
              <div className="absolute top-[12.5rem] left-[0.063rem] tracking-[1.12px] leading-[1.75rem] font-medium inline-block w-[4.25rem]">
                文艺方向
              </div>
              <div className="absolute top-[15.688rem] left-[0rem] text-[0.813rem] tracking-[1.12px] leading-[1.563rem] font-medium text-justify inline-block w-[10.563rem]">
                教育学/美术教育｜艺术文化/艺术学/艺术史｜创造构想 /KMD｜GAP
              </div>
              <img
                className="absolute top-[0rem] left-[0.063rem] w-[10.5rem] h-[10.5rem] object-cover"
                alt=""
                src="/image 8.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
