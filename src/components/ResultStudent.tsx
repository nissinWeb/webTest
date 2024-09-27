import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface ResultsStudentProps {
  studentName: string;
  School: string;
  studentContentA: string;
  studentContentB: string;
  videoLink: string;
}

export function ResultsStudent({
  studentName,
  School,
  studentContentA,
  studentContentB,
  videoLink,
}: ResultsStudentProps) {
  const [istoggled, setIsToggled] = useState(false);

  return (
    <div className="relative pt-[60px] flex flex-col">
      {/* 基本信息 */}

      <div className="grid grid-cols-4 gap-[50px] pb-[30px]  md:hidden ">
        <div className="col-span-3 w-full bg-slate-300">
          {!istoggled && (
            <iframe
              src={videoLink}
              allowFullScreen={true}
              className="w-full  bg-slate-200  aspect-video "
            />
          )}
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-[24px]">
        <div className="hidden md:block md:col-span-3">
          {
            !istoggled && (
              <iframe
                src={videoLink}
                allowFullScreen={true}
                className="w-full  bg-slate-200  aspect-video "
              />
            )
            // <img className="w-full h-[168px] bg-slate-300" />
          }
        </div>

        <div className="hidden md:block col-span-1"></div>

        <div className="col-span-12 pr-[50px] md:pr-0 md:col-span-6 flex flex-col gap-[20px] ">
          <div className="text-[20px] tracking-[2px] leading-[30px] font-medium">
            {studentName}
          </div>

          <div className="text-[12px] font-normal tracking-[2px] leading-[20px] md:leading-[30px] whitespace-pre-wrap">
            {School}
          </div>

          <div className="text-[14px] md:text-[16px]  tracking-[1.5px] leading-[25px] md:leading-[33px] font-medium text-justify inline-block ">
            {studentContentA}
          </div>
        </div>
        <div className="hidden md:col-span-2 md:flex justify-end">
          <button onClick={() => setIsToggled(!istoggled)}>
            {istoggled ? <Minus /> : <Plus />}
          </button>
        </div>
      </div>

      {/* 展开的 */}
      {istoggled && (
        <div className="relative grid grid-cols-12 gap-[24px] pt-[40px]">
          <div className="col-span-4"></div>
          <div className="col-span-8 flex flex-col gap-[40px]">
            <div className="text-[13px] font-normal tracking-[1.5px] leading-[25px]">
              {studentContentB}
            </div>
            <div>
              <iframe
                src={videoLink + "&autoplay=0"}
                allowFullScreen={true}
                className="w-full  aspect-video  min-h-[383px] bg-slate-200"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
