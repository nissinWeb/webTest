import { ArrowUp } from "lucide-react";

export function PageBottom() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滚动
    });
  };
  return (
    <div className="flex flex-col">
      <div className="w-full relative flex flex-col items-center justify-center text-center text-[0.813rem] text-black font-noto-sans-sc">
        <button
          onClick={scrollToTop}
          className="w-[1.5rem] relative h-[1.5rem] object-contain"
        >
          <ArrowUp />
        </button>
        <div className="self-stretch relative tracking-[1.12px] leading-[1.875rem] font-medium flex items-center justify-center h-[3.313rem] shrink-0">
          back to top
        </div>
      </div>

      <div className="w-full relative bg-[#F5F5F5] h-auto md:h-[22.5rem] flex flex-col items-center justify-center py-[36px] md:py-[2.562rem] px-[1rem] md:px-[9.375rem] box-border text-center text-[0.813rem] text-black font-noto-sans-sc">
        <div className="w-full flex flex-col items-center justify-start gap-[1.937rem]">
          <img
            className="w-[3.75rem] relative h-[3.775rem] object-cover"
            alt=""
            src="/logomarknishin.svg"
          />
          <div className="w-full flex flex-col relative h-[5rem] ">
            <div className=" tracking-[1.12px] leading-[1.875rem] font-medium justify-center h-[3.313rem]">
              Follow us
            </div>
            <div className=" top-[3.313rem] left-[28.813rem] flex flex-row items-center justify-center gap-[2.25rem]">
              <a
                href="https://mp.weixin.qq.com/s/-QiUBWRfGR0Z7P6oVTpKZA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[1.5rem] relative h-[1.5rem] object-cover"
                  alt=""
                  src="/image 12.png"
                />
              </a>

              <a
                href="https://m.weibo.cn/u/6548754675?wm=3333_2001&from=10E7193010&sourcetype=weixin&s_trans=6548754675_&s_channel=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[1.5rem] relative h-[1.5rem] object-cover"
                  alt=""
                  src="/image 11.png"
                />
              </a>

              <a
                href="https://space.bilibili.com/431545873"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[1.688rem] relative h-[1.688rem] object-cover"
                  alt=""
                  src="/image 15.png"
                />
              </a>

              <a
                href="https://www.xiaohongshu.com/user/profile/5eba3ba00000000001005dac?xhsshare=WeixinSession&appuid=5eba3ba00000000001005dac&apptime=1722331307&share_id=18d154516954411cb2d0aa5c4a4c742d&exSource="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-[1.75rem] relative h-[0.619rem] object-cover"
                  alt=""
                  src="/xiaohongshu 1.png"
                />
              </a>
            </div>
          </div>
          <div className="relative min-h-[3.313rem] text-[0.875rem]">
            <div className="tracking-[1.12px] leading-[1.875rem] flex items-center  min-h-[3.313rem] ">
              <span className="w-full">
                <p className="m-0">
                  <span>
                    <span className="font-medium font-noto-sans-sc">{` `}</span>
                    <span className="font-semibold font-noto-sans-sc">
                      高田马场校区
                    </span>
                    <br className="md:hidden" />
                    <span className="font-medium font-noto-sans-sc whitespace-pre-wrap">{` `}</span>
                    <span className="font-noto-sans-sc">
                      东京都新宿区高田马场1-21-13 广池大楼
                    </span>
                    <span className="font-medium font-noto-sans-sc whitespace-pre-wrap">{` 2楼 `}</span>
                    <br className="md:hidden" />
                    <span className="hidden md:inline-block font-medium font-noto-sans-sc whitespace-pre-wrap">{`        `}</span>

                    <span className="font-semibold font-noto-sans-sc whitespace-pre-wrap">{`广州校区 `}</span>
                    <br className="md:hidden" />
                    <span className="font-medium font-noto-sans-sc">{` `}</span>
                    <span className="whitespace-pre-wrap">
                      广州市天河区体育西路103号之一维多利B座1905室
                    </span>
                  </span>
                </p>
                <p className="m-0 text-[0.625rem]">
                  <span className="whitespace-pre-wrap">
                    <span>Copyright NISSINACADEMY All Rights Reserved.</span>
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
