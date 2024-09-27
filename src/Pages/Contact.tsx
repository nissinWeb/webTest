import ContactForm from "../components/ContactForm";
import TextAnimation from "../components/TextAnimation";

export function Contact() {
  return (
    <div className="flex flex-col w-full relative px-[20px] md:px-15 lg:px-[156px] pb-[60px] md:pb-[80px]">
      {/* 侧边栏   */}
      <div className="absolute md:hidden top-[50px] right-[10px] flex flex-col gap-[50px] z-[10]">
        <div className="rotate-90 text-[12px] tracking-[1.12px] font-medium">
          联系我们
        </div>
      </div>

      {/* 地址 */}
      <div className="flex flex-col pt-[100px] md:pt-[130px] pb-[100px]">
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex flex-col md:w-1/3  text-nowrap">
            <div className="text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px] pb-[20px]">
              <TextAnimation text="广州校区" />
            </div>
            <a
              href="https://surl.amap.com/H0nxAVG1r1Dq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] tracking-[2px] underline "
            >
              详细地图
            </a>
          </div>

          <div className="pt-[30px] md:pt-0 md:w-2/3 text-[12px] md:text-[16px] tracking-[1.5px] leading-[25px] md:leading-[33px]">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-[50px] md:gap-4">
              <div>地址：</div>
              <div className="col-span-3 md:col-span-7">
                广州市天河区体育西路103号之一维多利B座1905房
              </div>
              <div>Tel：</div>
              <div className="col-span-3 md:col-span-7">暂无</div>
              <div>QQ：</div>
              <div className="col-span-3 md:col-span-7">3247429894</div>
              <div>微信：</div>
              <div className="col-span-3 md:col-span-7">wingphonix1</div>
              <div className="pt-[30px]">交通：</div>
              <div className="pt-[30px] col-span-3 md:col-span-7">
                <ol className="list-decimal pl-4">
                  <li>请乘坐广州地铁1或3号线至体育西站，并选择E出口。</li>
                  <li>
                    走出E出口后，进入“天河又一城”商圈直行约600米，按照指示牌指引往“购书中心”方向，在9号出口乘扶梯上去地面。
                  </li>
                  <li>
                    到达地面后，往维多利广场方向，经过“优衣库”后继续前行约150米至写字楼B塔，日进美术学院即位于此，到达后请联系我方。
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[40px] w-full border-b-[0.5px] border-neutral-200 " />

        {/* 东京校区 */}
        <div className="flex w-full flex-col md:flex-row pt-[40px]">
          <div className="flex flex-col md:w-1/3 text-nowrap">
            <div className="text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px] pb-[20px]">
              <TextAnimation text="高马校区" />
            </div>
            <a
              href="https://maps.app.goo.gl/BKHXqm9BJwPNeq4x9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] tracking-[2px] underline "
            >
              详细地图
            </a>
          </div>

          <div className="pt-[30px] md:pt-0 md:w-2/3 text-[12px] md:text-[16px] tracking-[1.5px] leading-[25px] md:leading-[33px]">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-[50px] md:gap-4">
              <div>地址：</div>
              <div className="col-span-3 md:col-span-7">
                〒169-0075 东京都新宿区高田马场1-21-13 广池大楼 2楼
              </div>
              <div>Tel：</div>
              <div className="col-span-3 md:col-span-7">070-4486-6405</div>
              <div>QQ：</div>
              <div className="col-span-3 md:col-span-7">nissinacademy2</div>
              <div className="pt-[30px]">交通：</div>
              <div className="pt-[30px] col-span-3 md:col-span-7">
                <ol className="list-decimal pl-4">
                  <li>JR山手线 高田马场站 步行5分</li>
                  <li>东西线 高田马场站 步行7分</li>
                  <li>西武新宿线 高田马场站 步行7分</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 表单 */}
      <div>
        <div className="hidden md:block text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px] pb-[20px]">
          <TextAnimation text="专业老师升学面谈预约（免费）" />
        </div>
        <div className=" md:hidden text-[24px] md:text-[36px] tracking-[10px] md:tracking-[2px] pb-[20px]">
          <TextAnimation text="专业老师升学面谈预约" />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
