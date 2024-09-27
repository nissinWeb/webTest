import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

interface DropdownMenuProps {
  label: string;
  links: { label: string; path: string }[];
  linkTo: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  links,
  linkTo,
  onMouseEnter,
  onMouseLeave,
}) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(linkTo, { replace: false });

    const checkElement = () => {
      const targetElement = document.getElementById(path);
      if (targetElement) {
        // 获取目标元素的位置信息
        const rect = targetElement.getBoundingClientRect();

        // 偏移量，例如导航栏的高度为180px
        const yOffset = -160;

        // 计算滚动位置，减去偏移量
        const y = rect.top + window.pageYOffset + yOffset;

        // 平滑滚动到计算后的偏移位置
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        setTimeout(checkElement, 100); // 继续检查直到目标元素存在
      }
    };

    // 初始延迟
    setTimeout(checkElement, 100);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Button
        size="btnL"
        variant="underline"
        onClick={() => handleClick(linkTo)}
      >
        {label}
      </Button>

      {/* Dropdown Menu */}
      <div className="absolute left-0 top-full hidden group-hover:flex flex-col pt-[25px]">
        <div className="flex gap-x-[20px] items-center w-[250px] flex-wrap">
          {links.map((link, index) => (
            <div key={index} className="flex items-start">
              <button
                onClick={() => handleClick(link.path)} // path 为 ref id
                className="focus:outline-none"
              >
                <Button size="btnMS" variant="underline">
                  {link.label}
                </Button>
              </button>

              {/* 仅在不是最后一个元素时添加竖线 */}
              {index < links.length - 1 && (
                <span className="pl-[20px] h-[20px] text-neutral-600 font-normal">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
