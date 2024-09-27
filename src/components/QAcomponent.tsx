import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface QAcomponentProps {
  question: string;
  answer: string;
}

export function QAcomponent({ question, answer }: QAcomponentProps) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex flex-col relative w-full pb-[13px] ">
      <div className=" md:px-[95px] flex flex-col relative">
        <div className="flex justify-between">
          <div className="flex gap-[24px] flex-col font-medium leading-[30px]">
            <div className="text-[18px] md:text-[24px]">Q:</div>
            <div className="text-[15px] md:text-[16px]">{question}</div>
          </div>
          <button
            className="pl-[30px] md:pl-0"
            onClick={() => setIsToggled(!isToggled)}
          >
            {isToggled ? <Minus /> : <Plus />}
          </button>
        </div>
        {isToggled && (
          <div className="flex flex-col">
            <div className="pl-[50px] md:px-[96px] pt-[60px] pb-[30px] text-[14px] tracking-[1.5px] md:text-[15px] font-normal text-black leading-[25px] md:tracking-[1px] text-justify">
              {answer}
            </div>
          </div>
        )}
      </div>
      <div className="h-[24px] w-full border-b-[0.5px] border-neutral-200 "></div>
    </div>
  );
}
