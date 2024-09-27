export function Join() {
  return (
    <div className="flex items-center flex-col w-full relative py-[130px] px-[20px] md:px-20 lg:px-[156px] pb-[100px]">
      <div>
        <img src="/join.png" alt="" />
      </div>
      <div className="px-[100px] md:px-[150px] pt-[40px] text-[16px] leading-[33px] tracking-[1.5px] ">
        <div>欢迎加入我们，</div>
        <div className="pb-[40px]">
          填写求人票，或发履历书和相关资料到wingphoenix@hotmail.co.jp
        </div>
        <a
          href="/nissin.pdf" // 文件路径
          download="nissin job posting.pdf" // 下载时显示的文件名
          className="underline"
        >
          下载求人票
        </a>
      </div>
    </div>
  );
}
export default Join;
