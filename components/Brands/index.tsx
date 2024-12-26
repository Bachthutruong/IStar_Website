"use client";
import React from "react";

const Brands = () => {
  return (
    <>
      <section className="border border-x-0 border-y-stroke bg-[#A4DEFC] py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            <div className="col-span-1">
              <h2 className="text-2xl text-left font-bold text-black dark:text-white">LỜI NGỎ</h2>
            </div>
            <div className="col-span-4">
              <p className="text-base text-black dark:text-gray-300 leading-relaxed">
                Công ty TNHH Kiểm toán và Tư vấn ISTAR là nhà cung cấp dịch vụ chuyên ngành Kiểm toán và Tư vấn kế toán, tài chính có uy tín tại Việt Nam. Công ty tự hào có Ban lãnh đạo giàu kinh nghiệm, đội ngũ nhân viên năng động và mạng lưới chuyên gia rộng khắp, tất cả tạo nên thế mạnh vượt trội của Công ty. Đây cũng là những phẩm chất được hình thành và phát huy trong quá trình hoạt động kinh doanh của Công ty và là động lực giúp Công ty phát triển bền vững về chất lượng dịch vụ. Kết tinh trong đó là sự tín nhiệm và gắn bó của khách hàng dành cho Công ty.
              </p>
              <button className="mt-6 px-6 py-2 bg-[#A4DEFC] text-black border border-black rounded hover:bg-gray-100">
                Đọc thêm
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;