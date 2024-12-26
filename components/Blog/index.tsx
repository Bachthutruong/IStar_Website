import React from "react";
import Image from "next/image";
import images_1 from "../../public/images/blog/image_1.png"
const Blog = () => {
  return (
    <section id="features" className="py-20 lg:py-20 xl:py-20 bg-white">
        <div className="mx-auto px-4 md:px-8 xl:px-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C52] uppercase">TIN TỨC</h2>
            <div className="w-24 h-1 bg-[#5FC3F7] mx-auto mt-2"></div>
          </div>
          
          <div className="mt-12.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-0 md:mx-20">
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <Image src={images_1} alt="Feature 1" className="mx-auto mb-4 w-full" />
              <div className="p-4">
                <span className="text-xs text-[#5FC3F7] font-semibold">Công Ty</span>
                <h3 className="mt-2 text-lg font-bold text-[#2C2C52]">Thông báo thay đổi Danh sách Kiểm toán viên hành nghề</h3>
                <p className="mt-2 text-sm text-gray-600">Danh sách Kiểm toán viên hành nghề được chấp thuận kiểm toán cho đơn vị có lợi ích công chúng và đơn vị có lợi ích công chúng th...</p>
                <span className="text-xs text-[#5FC3F7] mt-2 block">BTV. Dũng Đinh</span>
              </div>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
              <Image src={images_1} alt="Feature 1" className="mx-auto mb-4 w-full" />
              <div className="p-4">
                <span className="text-xs text-[#5FC3F7] font-semibold">Công Ty</span>
                <h3 className="mt-2 text-lg font-bold text-[#2C2C52]">Thông báo thay đổi Danh sách Kiểm toán viên hành nghề</h3>
                <p className="mt-2 text-sm text-gray-600">Danh sách Kiểm toán viên hành nghề được chấp thuận kiểm toán cho đơn vị có lợi ích công chúng và đơn vị có lợi ích công chúng th...</p>
                <span className="text-xs text-[#5FC3F7] mt-2 block">BTV. Dũng Đinh</span>
              </div>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
              <Image src={images_1} alt="Feature 1" className="mx-auto mb-4 w-full" />
              <div className="p-4">
                <span className="text-xs text-[#5FC3F7] font-semibold">Công Ty</span>
                <h3 className="mt-2 text-lg font-bold text-[#2C2C52]">Thông báo thay đổi Danh sách Kiểm toán viên hành nghề</h3>
                <p className="mt-2 text-sm text-gray-600">Danh sách Kiểm toán viên hành nghề được chấp thuận kiểm toán cho đơn vị có lợi ích công chúng và đơn vị có lợi ích công chúng th...</p>
                <span className="text-xs text-[#5FC3F7] mt-2 block">BTV. Dũng Đinh</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Blog;
