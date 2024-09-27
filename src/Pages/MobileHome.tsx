import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import nissinLogo from "../assets/logo.svg";
import logoMark from "../assets/logomarknishin.svg";

interface MobileHomeProps {
  onClose: () => void; // 关闭MobileHome的回调
}

export function MobileHome({ onClose }: MobileHomeProps) {
  return (
    <div className="flex flex-col fixed inset-0 z-[101] bg-white">
      <div className="flex justify-between px-[32px] pt-[16px]">
        {/* logo */}
        <a href="/">
          <img
            src={nissinLogo}
            className="transition-all duration-300 w-[70px] h-auto object-contain"
          />
        </a>
      </div>

      <div className="grid grid-cols-2 h-full">
        {/* btn */}
        <div className="flex flex-col gap-[50px] pl-[40px] pb-[20px] justify-end">
          <div className="flex flex-col gap-5 sm:gap-8 flex-shrink-0">
            <Link to={"/about"} onClick={onClose}>
              <Button size="btnL" variant="underline">
                关于日进
              </Button>
            </Link>

            <Link to={"/results"} onClick={onClose}>
              <Button size="btnL" variant="underline">
                合格实绩
              </Button>
            </Link>
            <Link to={"/team"} onClick={onClose}>
              <Button size="btnL" variant="underline">
                师资团队
              </Button>
            </Link>
            <Link to={"/schedule"} onClick={onClose}>
              <Button size="btnL" variant="underline">
                课程安排
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link to={"/contact"} onClick={onClose}>
              <Button size="btnS" variant="underline">
                联系我们
              </Button>
            </Link>
            <Link to={"/join"} onClick={onClose}>
              <Button size="btnS" variant="underline">
                加入我们
              </Button>
            </Link>

            <Link to={"/qa"} onClick={onClose}>
              <Button size="btnS" variant="underline">
                常见问题
              </Button>
            </Link>
          </div>

          <div className="flex gap-2">
            <Button size="language" variant="language">
              CN
            </Button>
            |<Button size="language">JP</Button>|
            <Button size="language">EN</Button>
          </div>

          <img src={logoMark} className="max-w-[40px] h-auto" />
        </div>
      </div>
    </div>
  );
}
