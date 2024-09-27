import { Menu, X } from "lucide-react";
import nissinLogo from "../assets/logo.svg";
import logoMark from "../assets/logomarknishin.svg";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu } from "./DropdownMenu";
import { throttle } from "lodash"; // 引入lodash的throttle

export function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // 用于控制logo大小
  const [isExpanded, setIsExpanded] = useState(false); // 用于控制导航栏是否展开

  const location = useLocation();

  // 使用节流处理滚动事件
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }, 500); // 100ms节流

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 每次路由变化时滚动到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // 关闭菜单
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      // 禁用滚动
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      // 恢复滚动
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // 控制导航栏伸缩
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };
  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className="sticky top-0 left-0 z-[100]">
      <div
        className={`relative flex justify-between pt-[30px] px-8 md:px-12 bg-white lg:pr-[80px] lg:pl-[87px] transition-all duration-75 ${
          isScrolled
            ? isExpanded
              ? "pb-[50px]" // 页面滚动且悬浮时加大padding
              : "pb-[10px]" // 页面滚动时但没有悬浮保持较小padding
            : "pb-[10px]" // 页面在顶部时保持固定padding
        }`}
      >
        {/* 左侧logo */}
        <div className="flex-grow flex items-start min-w-0  z-50  ">
          <a href="/">
            <img
              src={nissinLogo}
              className={`transition-all duration-300 ${
                isScrolled ? "w-[70px] h-auto" : "w-[115px] h-[125px]"
              } object-contain`}
            />
          </a>
        </div>

        {/* 手机端菜单按钮 */}
        <Button
          className="md:hidden"
          variant="ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* 网页端文字按钮 */}
        <div className="hidden md:flex ml-[4rem] gap-[1.5rem] lg:gap-[80px] items-start pt-[10px] ">
          {/* 含子菜单大按钮 */}
          <div className="flex gap-[1rem] lg:gap-[2rem]">
            <DropdownMenu
              linkTo="/about"
              label="关于日进"
              links={[
                { label: "寄语", path: "messageW" },
                { label: "核心优势", path: "coreAdvantagesW" },
                { label: "学院理念", path: "philosophyW" },
              ]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <DropdownMenu
              linkTo="/results"
              label="合格实绩"
              links={[
                { label: "合格实绩", path: "resultAchievements" },
                { label: "合格采访", path: "interviews" },
              ]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <DropdownMenu
              linkTo="/team"
              label="师资团队"
              links={[
                { label: "博士", path: "dc" },
                { label: "纯艺方向", path: "fa" },
                { label: "设计方向", path: "de" },
                { label: "ACG数媒方向", path: "acg" },
                { label: "文化艺术方向", path: "ca" },
              ]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <DropdownMenu
              linkTo="/schedule"
              label="课程安排"
              links={[
                { label: "课程特色", path: "kcts" },
                { label: "升学指导", path: "sxzd" },
                { label: "学部课程", path: "xbkc" },
                { label: "大学院课程", path: "dxykc" },
              ]}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>

          {/* 小按钮 */}
          <div className="flex gap-[1rem] lg:gap-[2rem]">
            <Link to={"/contact"}>
              <Button size="btnS" variant="underline">
                联系我们
              </Button>
            </Link>
            <Link to={"/join"}>
              <Button size="btnS" variant="underline">
                加入我们
              </Button>
            </Link>
            <Link to={"/qa"}>
              <Button size="btnS" variant="underline">
                常见问题
              </Button>
            </Link>
          </div>
          <Button size="language" variant="language">
            CN
          </Button>
        </div>
      </div>

      {/* 手机端菜单页 */}
      <div
        className={`flex flex-col fixed inset-0 z-[101] bg-white  transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between px-[32px] pt-[16px]">
          {/* logo */}
          <a href="/">
            <img
              src={nissinLogo}
              className="transition-all duration-300 w-[70px] h-auto object-contain"
            />
          </a>
          <Button
            className="md:hidden"
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <div className="grid grid-cols-2 h-full">
          {/* btn */}
          <div className="flex flex-col gap-[50px] pl-[40px] pb-[20px] justify-end">
            <div className="flex flex-col gap-5 sm:gap-8 flex-shrink-0">
              <Link to={"/about"}>
                <Button size="btnL" variant="underline">
                  关于日进
                </Button>
              </Link>

              <Link to={"/results"}>
                <Button size="btnL" variant="underline">
                  合格实绩
                </Button>
              </Link>
              <Link to={"/team"}>
                <Button size="btnL" variant="underline">
                  师资团队
                </Button>
              </Link>
              <Link to={"/schedule"}>
                <Button size="btnL" variant="underline">
                  课程安排
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <Link to={"/contact"}>
                <Button size="btnS" variant="underline">
                  联系我们
                </Button>
              </Link>
              <Link to={"/join"}>
                <Button size="btnS" variant="underline">
                  加入我们
                </Button>
              </Link>

              <Link to={"/qa"}>
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
    </div>
  );
}
