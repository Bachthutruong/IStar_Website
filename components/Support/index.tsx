"use client";
import { Button, Col, Input, Row } from "antd";
import Image from "next/image";
import React from "react";
import background from "../../public/images/about/background-image.png";
import blog_images1 from "../../public/images/blog/blog_images1.png"
import blog_images2 from "../../public/images/blog/blog_images2.png"

const Support = () => {
  return (
    <>
      <section className="">
        <div className="bg-white">
          <div className="flex flex-col items-stretch h-full">
            <div className="w-full md:h-full h-[300px] relative">
              <Image
                src={background}
                alt="Background Image"
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-white text-4xl font-bold uppercase">Tuyển dụng</h2>
                <div className="w-24 h-1 bg-[#5FC3F7] mt-2"></div>
              </div>
            </div>
            <div className="mx-auto px-4 md:px-8 xl:px-20 mb-20">
              <div className="mt-12.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                <div className="p-4 bg-white shadow-lg rounded-lg">
                  <Image src={blog_images1} alt="Feature 1" className="mx-auto mb-4" />
                  <div className="p-4">
                    <span className=" text-[#5FC3F7] font-semibold">Tuyển dụng</span>
                    <h3 className="mt-2 text-lg font-bold text-[#262626]">Chương Trình Tuyển Sinh Viên Thực Tập 2025</h3>
                    <p className="mt-2 text-sm text-gray-600">Bạn đang là sinh viên năm cuối chuyên ngành tài chính, kế toán – kiểm toán, bạn đang cần tìm một nơi để thực tập, bạn muốn làm việc trong một môi trường chuyên nghiệp, năng động. Vậy thì Công Ty TNHH Kiểm Toán – Tư Vấn Đất Việt sẽ là sự lựa chọn tốt nhất dành cho bạn.</p>
                    <span className=" text-[#5FC3F7] mt-2 block">Tìm hiểu thêm</span>
                  </div>
                </div>

                <div className="p-4 bg-white shadow-lg rounded-lg">
                  <Image src={blog_images2} alt="Feature 2" className="mx-auto mb-4" />
                  <div className="p-4">
                    <span className=" text-[#5FC3F7] font-semibold">Tuyển dụng</span>
                    <h3 className="mt-2 text-lg font-bold text-[#262626]">Chương Trình Tuyển Sinh Viên Thực Tập 2024</h3>
                    <p className="mt-2 text-sm text-gray-600">Bạn đang là sinh viên năm cuối chuyên ngành tài chính, kế toán – kiểm toán, bạn đang cần tìm một nơi để thực tập, bạn muốn làm việc trong một môi trường chuyên nghiệp, năng động. Vậy thì Công Ty TNHH Kiểm Toán – Tư Vấn Đất Việt sẽ là sự lựa chọn tốt nhất dành cho bạn.</p>
                    <span className=" text-[#5FC3F7] mt-2 block">Tìm hiểu thêm</span>
                  </div>
                </div>

                <div className="p-4 bg-white shadow-lg rounded-lg">
                  <div className="p-4">
                    <span className="text-xs text-[#5FC3F7] font-semibold">Công Ty</span>
                    <h3 className="mt-2 text-lg font-bold text-[#262626]">Thông báo thay đổi Danh sách Kiểm toán viên hành nghề</h3>
                    <p className="mt-2 text-sm text-gray-600">Danh sách Kiểm toán viên hành nghề được chấp thuận kiểm toán cho đơn vị có lợi ích công chúng và đơn vị có lợi ích công chúng th...</p>
                    <span className="text-xs text-[#5FC3F7] mt-2 block">BTV. Dũng Đinh</span>
                  </div>
                  <hr />
                  <div className="p-4">
                    <span className="text-xs text-[#5FC3F7] font-semibold">Công Ty</span>
                    <h3 className="mt-2 text-lg font-bold text-[#262626]">Thông báo thay đổi Danh sách Kiểm toán viên hành nghề</h3>
                    <p className="mt-2 text-sm text-gray-600">Danh sách Kiểm toán viên hành nghề được chấp thuận kiểm toán cho đơn vị có lợi ích công chúng và đơn vị có lợi ích công chúng th...</p>
                    <span className="text-xs text-[#5FC3F7] mt-2 block">BTV. Dũng Đinh</span>
                  </div>
                  <hr />
                  <div className="p-4">
                    <span className="text-xs text-[#5FC3F7] font-semibold">Công Ty</span>
                    <h3 className="mt-2 text-lg font-bold text-[#262626]">Thông báo thay đổi Danh sách Kiểm toán viên hành nghề</h3>
                    <p className="mt-2 text-sm text-gray-600">Danh sách Kiểm toán viên hành nghề được chấp thuận kiểm toán cho đơn vị có lợi ích công chúng và đơn vị có lợi ích công chúng th...</p>
                    <span className="text-xs text-[#5FC3F7] mt-2 block">BTV. Dũng Đinh</span>
                  </div>
                  <hr />
                  <div className="p-4">
                    <span className="text-xs text-[#5FC3F7] font-semibold">Công Ty</span>
                    <h3 className="mt-2 text-lg font-bold text-[#262626]">Thông báo thay đổi Danh sách Kiểm toán viên hành nghề</h3>
                    <p className="mt-2 text-sm text-gray-600">Danh sách Kiểm toán viên hành nghề được chấp thuận kiểm toán cho đơn vị có lợi ích công chúng và đơn vị có lợi ích công chúng th...</p>
                    <span className="text-xs text-[#5FC3F7] mt-2 block">BTV. Dũng Đinh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
