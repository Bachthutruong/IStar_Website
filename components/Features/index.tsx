"use client";
import React from "react";
import Image from "next/image";
import images_1 from "../../public/images/service/images_1.png"
import images_2 from "../../public/images/service/images_2.png"
import images_3 from "../../public/images/service/images_3.png"
import images_4 from "../../public/images/service/images_5.png"
const Feature = () => {
  return (
    <>
      {/* <!-- Features Section Start --> */}
      <section id="features" className="py-20 lg:py-20 xl:py-20 bg-white">
        <div className="mx-auto px-4 md:px-8 xl:px-20">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C52] uppercase">DỊCH VỤ NỔI BẬT</h2>
            <div className="w-24 h-1 bg-[#5FC3F7] mx-auto mt-2"></div>
          </div>
          
          {/* <!-- Features List --> */}
          <div className="mt-12.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Item 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <Image src={images_1} alt="Feature 1" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Kiểm toán và báo cáo tài chính</h3>
              <p className="text-sm text-gray-600">
                Chúng tôi là đơn vị hàng đầu trong cung cấp các dịch vụ tin cậy về kiểm toán báo cáo tài chính, soát xét thông tin tài chính, kiểm toán về các công việc đặc biệt.
              </p>
            </div>

            {/* Feature Item 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <Image src={images_2} alt="Feature 1" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Kiểm toán xây dựng cơ bản</h3>
              <p className="text-sm text-gray-600">
                Kiểm tra đánh giá tính pháp lý của Dự án và việc tuân thủ trình tự thủ tục đầu tư xây dựng công trình, kiểm tra chi phí đầu tư, kiểm tra giá trị tài sản hình thành qua đầu tư.
              </p>
            </div>

            {/* Feature Item 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <Image src={images_3} alt="Feature 1" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Kế toán, thuế</h3>
              <p className="text-sm text-gray-600">
                Dịch vụ mà chúng tôi cung cấp cho khách hàng rất đa dạng, bao gồm tư vấn thuế thu nhập doanh nghiệp, thuế giá trị gia tăng, thuế xuất nhập khẩu, thuế nhà thầu nước ngoài...
              </p>
            </div>

            {/* Feature Item 4 */}
            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
              <Image src={images_4} alt="Feature 1" className="mx-auto mb-4" />
              <h3 className="text-lg font-bold text-black mb-2">Chuyên ngành khác</h3>
              <p className="text-sm text-gray-600">
                Đội ngũ chuyên gia của chúng tôi sẽ giúp khách hàng định hướng xuyên suốt quy trình phức tạp và rối rắm, sao cho khách hàng có thể giải quyết được mọi vấn đề phát sinh và đưa ra quyết định đúng đắn.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Section End --> */}
    </>
  );
};

export default Feature;
