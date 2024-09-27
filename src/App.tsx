import "./App.css";
import { PageBottom } from "./components/PageBottom";
import { TopNavbar } from "./layout/TopNavbar";
import { AboutUs } from "./Pages/AboutUs";
import { Home } from "./Pages/Home";
import { Results } from "./Pages/Results";
import { Schedule } from "./Pages/Schedule";
import { Team } from "./Pages/Team";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashScreen from "./Pages/SplashScreen";
import Join from "./Pages/Join";
import { QA } from "./Pages/QA";
import { Contact } from "./Pages/Contact";
import { MobileHome } from "./Pages/MobileHome"; // 新的MobileHome页面
import { useMediaQuery } from "react-responsive"; // 引入useMediaQuery

function App() {
  // 控制开屏页面显示的状态
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false); // 控制内容是否可见
  const [isMobileHomeVisible, setIsMobileHomeVisible] = useState(false);

  // 媒体查询：检测是否为手机端
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // 检查localStorage，用户是否已经看过开屏画面
  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      // 如果用户已经看过开屏页面，则直接显示内容
      setIsSplashVisible(false);
      setIsContentVisible(true);
      setIsMobileHomeVisible(true);
    }
  }, []);

  // 当开屏页面完成时，隐藏开屏页面并显示主体内容
  const handleSplashFinish = () => {
    setIsSplashVisible(false); // 完全隐藏开屏页面
    localStorage.setItem("hasSeenSplash", "true"); // 存储用户已经看过开屏页面的信息
    setIsMobileHomeVisible(true); // Splash结束后显示MobileHome
  };

  // 在开屏页面开始消失时，立即显示主体内容
  const handleSplashStartHide = () => {
    setIsContentVisible(true); // 主体内容立即显示
  };
  // 用于处理点击MobileHome中的按钮，关闭MobileHome
  const handleMobileHomeClose = () => {
    setIsMobileHomeVisible(false); // 关闭MobileHome
  };
  return (
    <Router>
      <div className="relative flex flex-col">
        {/* 如果开屏页面可见，先加载开屏页面 */}
        {isSplashVisible && (
          <SplashScreen
            onFinish={handleSplashFinish}
            onStartHide={handleSplashStartHide} // 当开屏页面开始消失时，显示主体内容
          />
        )}

        {/* 如果是手机端并且路径是首页 "/", 显示 MobileHome，且 isMobileHomeVisible 控制其可见性 */}
        {isMobile && location.pathname === "/" && isMobileHomeVisible && (
          <MobileHome onClose={handleMobileHomeClose} />
        )}

        {/* 如果不是手机端，或者路径不是首页，显示常规内容 */}
        {(!isMobile || location.pathname !== "/" || !isMobileHomeVisible) && (
          <div
            className={`transition-opacity duration-500 ${
              isContentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <TopNavbar />

            {/* 路由配置 */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/results" element={<Results />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/team" element={<Team />} />
              <Route path="/join" element={<Join />} />
              <Route path="/qa" element={<QA />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <PageBottom />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
