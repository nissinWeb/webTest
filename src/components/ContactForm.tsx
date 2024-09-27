import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    gender: string;
    phone: string;
    email: string;
    qq: string;
    wechat: string;
    address: string;
    school: string;
    degree: string;
    goal: string;
    targetSchool: string[];
    majorDirection: string[];
    interviewDate: string;
    howDidYouKnow: string[];
    otherText: string;
  }>({
    name: "",
    gender: "",
    phone: "",
    email: "",
    qq: "",
    wechat: "",
    address: "",
    school: "",
    degree: "",
    goal: "",
    targetSchool: [],
    majorDirection: [],
    interviewDate: "",
    howDidYouKnow: [],
    otherText: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // 实时更新和验证输入框
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 实时清除错误提示
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // 清除对应字段的错误
    }));
  };

  // 实时更新和验证复选框
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isChecked = e.target.checked;

    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: isChecked
        ? [...((prev[name as keyof typeof formData] as string[]) || []), value]
        : (prev[name as keyof typeof formData] as string[]).filter(
            (item: string) => item !== value
          ),
    }));

    // 实时清除错误提示
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // 清除复选框错误
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // 必填字段验证
    if (!formData.name) newErrors.name = "姓名是必填项";
    if (!formData.gender) newErrors.gender = "请选择性别";
    if (!formData.phone) newErrors.phone = "联系电话是必填项";
    if (!formData.email) newErrors.email = "邮箱是必填项";
    if (!formData.goal) newErrors.goal = "请选择进学目标";
    if (formData.targetSchool.length === 0)
      newErrors.targetSchool = "请选择目标院校";
    if (formData.majorDirection.length === 0)
      newErrors.majorDirection = "请选择进学方向";
    if (!formData.interviewDate) newErrors.interviewDate = "请选择面谈日期";
    if (formData.howDidYouKnow.length === 0)
      newErrors.howDidYouKnow = "请选择得知渠道";

    // 格式验证
    const phonePattern = /^[0-9]{10,15}$/; // 简单的电话号码验证
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "请输入有效的联系电话";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 简单的邮箱验证
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // 如果没有错误，返回 true
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // 如果验证通过
      alert("提交成功！");
      console.log("Form submitted:", formData);
      // 在此处执行提交逻辑
    } else {
      // 如果验证失败
      alert("缺少信息，请修正后再提交");
    }
  };

  return (
    <form
      className="text-[13px] md:text-[16px] tracking-[1.5px] md:tracking-[3px]  font-medium flex flex-col pt-[60px] gap-[20px] md:px-[96px]"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-7 md:grid-cols-5  gap-x-0 gap-y-[30px] md:gap-x-[24px] md:gap-y-[40px] pb-[30px]  md:pb-[60px]">
        <label className="col-span-3 md:col-span-2">姓名*</label>
        <div className="relative col-span-4 md:col-span-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border p-2 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <div className="absolute w-full text-red-500 text-xs mt-[2px]">
              {errors.name}
            </div>
          )}
        </div>

        <label className="col-span-3 md:col-span-2">性别*</label>
        <div className="relative col-span-4 md:col-span-3">
          <div className="grid grid-cols-2 md:flex md:gap-10">
            <label>
              <input
                className="mr-2 hidden md:inline-block"
                type="radio"
                name="gender"
                value="男"
                onChange={handleChange}
                checked={formData.gender === "男"}
              />
              男
              <input
                className="md:hidden ml-2"
                type="radio"
                name="gender"
                value="男"
                onChange={handleChange}
                checked={formData.gender === "男"}
              />
            </label>
            <label>
              <input
                className="mr-2 hidden md:inline-block"
                type="radio"
                name="gender"
                value="女"
                onChange={handleChange}
                checked={formData.gender === "女"}
              />
              女
              <input
                className="ml-2 md:hidden"
                type="radio"
                name="gender"
                value="女"
                onChange={handleChange}
                checked={formData.gender === "女"}
              />
            </label>
          </div>
          {errors.gender && (
            <div className="absolute w-full text-red-500 text-xs mt-[2px]">
              {errors.gender}
            </div>
          )}
        </div>

        <label className="col-span-3 md:col-span-2">联系电话*</label>
        <div className="relative col-span-4 md:col-span-3">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border p-2 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <div className="absolute w-full text-red-500 text-xs mt-[2px]">
              {errors.phone}
            </div>
          )}
        </div>

        <label className="col-span-3 md:col-span-2">邮箱*</label>
        <div className="relative col-span-4 md:col-span-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border p-2 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <div className="absolute text-red-500 text-xs mt-[2px]">
              {errors.email}
            </div>
          )}
        </div>

        <label className="col-span-3 md:col-span-2">QQ</label>
        <input
          type="text"
          name="qq"
          value={formData.qq}
          onChange={handleChange}
          className="col-span-4 md:col-span-3 border p-2"
        />

        <label className="col-span-3 md:col-span-2">WeChat</label>
        <input
          type="text"
          name="wechat"
          value={formData.wechat}
          onChange={handleChange}
          className="col-span-4 md:col-span-3 border p-2"
        />

        <label className="col-span-3 md:col-span-2">常用地址</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="col-span-4 md:col-span-3 border p-2"
        />

        <label className="col-span-3 md:col-span-2">出身语言学校</label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          className="col-span-4 md:col-span-3 border p-2"
        />

        <label className="col-span-3 md:col-span-2">毕业国内院校/教授名</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          className="col-span-4 md:col-span-3 border p-2"
        />

        <label className="col-span-3 md:col-span-2">进学目标*</label>
        <div className="relative col-span-4 md:col-span-3">
          <div className="grid grid-cols-2 md:flex md:gap-10">
            <label>
              <input
                className="mr-2 hidden md:inline-block"
                type="radio"
                name="goal"
                value="大学"
                onChange={handleChange}
                checked={formData.goal === "大学"}
              />
              大学
              <input
                className="ml-2 md:hidden"
                type="radio"
                name="goal"
                value="大学"
                onChange={handleChange}
                checked={formData.goal === "大学"}
              />
            </label>
            <label>
              <input
                className="mr-2 hidden md:inline-block"
                type="radio"
                name="goal"
                value="大学院"
                onChange={handleChange}
                checked={formData.goal === "大学院"}
              />
              大学院
              <input
                className="md:hidden ml-2"
                type="radio"
                name="goal"
                value="大学院"
                onChange={handleChange}
                checked={formData.goal === "大学院"}
              />
            </label>
          </div>
          {errors.goal && (
            <div className="absolute text-red-500 text-xs mt-[2px]">
              {errors.goal}
            </div>
          )}
        </div>

        <label className="col-span-3 md:col-span-2">目标院校*（多选）</label>
        <div className="relative col-span-4 md:col-span-3 ">
          <div className="w-full flex flex-wrap justify-between md:grid-cols-3 gap-2 md:gap-x-[30px] md:justify-start">
            {[
              "东艺大",
              "多摩美",
              "武藏美",
              "女子美",
              "日艺大",
              "东京造形",
              "京都精华",
              "大阪艺术大学",
            ].map((school) => (
              <label key={school}>
                <input
                  type="checkbox"
                  className="hidden md:inline-block mr-2"
                  name="targetSchool"
                  value={school}
                  onChange={handleCheckboxChange}
                  checked={formData.targetSchool.includes(school)}
                />
                {school}
                <input
                  type="checkbox"
                  className="md:hidden ml-2"
                  name="targetSchool"
                  value={school}
                  onChange={handleCheckboxChange}
                  checked={formData.targetSchool.includes(school)}
                />
              </label>
            ))}
          </div>
          {errors.targetSchool && (
            <div className="absolute w-full text-red-500 text-xs mt-[2px]">
              {errors.targetSchool}
            </div>
          )}
        </div>

        <label className="col-span-3 md:col-span-2">进学方向*</label>
        <div className="relative col-span-4 md:col-span-3">
          <div className="w-full flex justify-between flex-wrap md:grid-cols-3 gap-2 md:gap-x-[30px] md:justify-start">
            {[
              "平面设计",
              "工业设计",
              "环境设计",
              "多媒体设计",
              "时尚设计",
              "动漫设计",
              "游戏设计",
              "纯艺",
            ].map((direction) => (
              <label key={direction}>
                <input
                  className="hidden md:inline-block mr-2"
                  type="checkbox"
                  name="majorDirection"
                  value={direction}
                  onChange={handleCheckboxChange}
                  checked={formData.majorDirection.includes(direction)}
                />
                {direction}
                <input
                  className="md:hidden ml-2"
                  type="checkbox"
                  name="majorDirection"
                  value={direction}
                  onChange={handleCheckboxChange}
                  checked={formData.majorDirection.includes(direction)}
                />
              </label>
            ))}
          </div>
          {errors.majorDirection && (
            <div className="absolute text-red-500 text-xs mt-[2px]">
              {errors.majorDirection}
            </div>
          )}
        </div>

        <label className="col-span-3 md:col-span-2">希望面谈日期*</label>
        <div className="relative col-span-4 md:col-span-3">
          <input
            type="date"
            name="interviewDate"
            value={formData.interviewDate}
            onChange={handleChange}
            className={`border p-2 ${
              errors.interviewDate ? "border-red-500 text-red-500" : ""
            }`}
          />
          {errors.interviewDate && (
            <div className="absolute text-red-500 text-xs mt-[2px]">
              {errors.interviewDate}
            </div>
          )}
        </div>

        <label className="col-span-3 md:col-span-2">
          得知日进艺术学院
          <br className="md:hidden" />
          的渠道*
        </label>
        <div className="relative col-span-4 md:col-span-3">
          <div className="relative w-full flex flex-col gap-[10px] md:grid md:grid-cols-3 md:gap-2">
            {["同学朋友推荐", "老师介绍", "网络搜索", "获得所发宣传画册"].map(
              (channel) => (
                <label
                  className="w-full flex justify-between md:justify-start"
                  key={channel}
                >
                  <input
                    className="hidden md:inline-block mr-2"
                    type="checkbox"
                    name="howDidYouKnow" // 修改为与问题相匹配的名称
                    value={channel}
                    onChange={handleCheckboxChange}
                    checked={formData.howDidYouKnow.includes(channel)} // 修改字段
                  />
                  {channel}
                  <input
                    className="md:hidden"
                    type="checkbox"
                    name="howDidYouKnow" // 同样的名称
                    value={channel}
                    onChange={handleCheckboxChange}
                    checked={formData.howDidYouKnow.includes(channel)} // 同样的字段
                  />
                </label>
              )
            )}

            <label className="w-full flex justify-between md:justify-start">
              <input
                className="hidden md:inline-block mr-2"
                type="checkbox"
                name="howDidYouKnow" // 同样的名称
                value="其他"
                onChange={handleCheckboxChange}
                checked={formData.howDidYouKnow.includes("其他")} // 修改字段
              />
              其他
              <input
                className="md:hidden"
                type="checkbox"
                name="howDidYouKnow" // 同样的名称
                value="其他"
                onChange={handleCheckboxChange}
                checked={formData.howDidYouKnow.includes("其他")} // 修改字段
              />
            </label>

            {/* 如果勾选了“其他”，显示文本框 */}
            {formData.howDidYouKnow.includes("其他") && (
              <input
                type="text"
                placeholder="请填写其他途径"
                className="mt-2 p-2 border border-gray-300 rounded"
                value={formData.otherText || ""}
                onChange={(e) =>
                  setFormData({ ...formData, otherText: e.target.value })
                }
              />
            )}
          </div>
          {errors.howDidYouKnow && (
            <div className="absolute text-red-500 text-xs mt-[2px]">
              {errors.howDidYouKnow}
            </div>
          )}
        </div>
      </div>{" "}
      <button
        type="submit"
        className="w-1/2 md:w-1/3  my-[20px] mx-auto  bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        提交预约内容{">>>"}
      </button>
    </form>
  );
};

export default ContactForm;
