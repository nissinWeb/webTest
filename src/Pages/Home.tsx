import { Link } from "react-router-dom";
import { HomeAbout } from "./HomeComponents/HomeAbout";
import { HomeResult } from "./HomeComponents/HomeResult";
import { HomeSchedule } from "./HomeComponents/HomeSchedule";
import { HomeTeam } from "./HomeComponents/HomeTeam"; // Import the HomeTeam component

export function Home() {
  return (
    <>
      <div className="hidden md:flex flex-grow overflow-y-auto overflow-x-hidden flex-col items-center gap-[190px] px-10 md:px-20 lg:px-[156px] pt-[80px] pb-[120px]">
        <HomeAbout />
        <HomeResult />
        <HomeTeam />
        <HomeSchedule />
        <div className="w-full relative  text-center text-[2.25rem]  text-black font-noto-sans-sc flex justify-center">
          <div className=" border-gainsboro border-[1px] border-solid box-border top-[4.313rem] left-[6rem] flex flex-row items-start justify-center gap-[11.25rem] pt-[69px] pb-[57px] pl-[96px] pr-[31px]">
            <div className=" relative tracking-[20px] font-medium flex items-center justify-center shrink-0">
              联系我们
            </div>
            <div className="w-[26.563rem] flex flex-col items-start justify-start gap-[4.062rem] text-left text-[1.25rem]">
              <div className="self-stretch relative tracking-[3px] leading-[1.75rem]">
                <p className="[margin-block-start:0] [margin-block-end:10px]">
                  日进艺术学院的大门为您打开！
                </p>
                <p className="m-0">欢迎联系我们获取更多信息</p>
              </div>
              <Link to="/contact">
                <div className="flex flex-row items-center justify-start gap-[1.5rem]">
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/arrow_forward.svg"
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/arrow_forward.svg"
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/arrow_forward.svg"
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/arrow_forward.svg"
                  />
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/arrow_forward.svg"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
