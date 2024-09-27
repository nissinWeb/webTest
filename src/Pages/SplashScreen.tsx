import React, { useState, useEffect } from "react";
import logo from "../assets/logoWhite.svg"; // 你的 logo 文件路径
import videoSource from "../assets/nissinCom.mp4"; // 你的视频文件路径
import { ArrowDown } from "lucide-react";

interface SplashScreenProps {
  onFinish: () => void; // 当动画完成时调用的回调函数
  onStartHide: () => void; // 当开屏页面开始隐藏时调用
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  onStartHide,
}) => {
  const [translateY, setTranslateY] = useState(0); // 控制页面向上滑动动画的偏移量
  const [isScrolled, setIsScrolled] = useState(false); // 记录是否已经滚动

  // 监听视频播放结束
  const handleVideoEnd = () => {
    handleFinish();
  };

  // 监听滚动事件
  const handleScroll = (e: WheelEvent) => {
    if (!isScrolled && e.deltaY > 0) {
      handleFinish();
    }
  };

  // 监听手机端的触摸滑动事件
  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    if (touch.clientY < 100 && !isScrolled) {
      handleFinish();
    }
  };

  // 触发隐藏的动画并恢复页面滚动
  const handleFinish = () => {
    setIsScrolled(true); // 标记已经滚动过，避免多次触发
    onStartHide(); // 立即显示主体内容
    setTranslateY(100); // 向上移动100%
    setTimeout(onFinish, 800); // 动画结束后调用父组件的回调
  };

  useEffect(() => {
    // 禁用滚动条
    document.body.style.overflow = "hidden";

    // 为鼠标滚轮和触摸滑动添加事件监听
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      // 恢复滚动条
      document.body.style.overflow = "auto";

      // 移除事件监听
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolled]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden transition-transform duration-700 ease-in-out"
      style={{
        transform: `translateY(-${translateY}%)`,
        borderRadius: `${translateY > 0 ? "30px" : "0px"}`,
      }}
    >
      {/* 背景视频 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop={false}
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 叠加的 Logo */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[20vw] max-w-[163px] min-w-[100px] h-auto"
        />
      </div>

      {/* 滚动提醒 */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-end text-white  gap-[18px] pb-[36px]">
        <div className=" text-[13px] tracking-[1.12px]">scroll</div>

        <ArrowDown />
      </div>
    </div>
  );
};

export default SplashScreen;
