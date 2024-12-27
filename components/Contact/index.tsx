"use client";
import { Button, Input } from "antd";
import Image from "next/image";
import React from "react";
import background from "../../public/images/about/background-image.png";
import backgroundImage from "../../public/images/MaskGroup.png"
import Facebook from "../../public/images/Facebook.png"
import Youtube from "../../public/images/Youtube.png"
import Gmail from "../../public/images/Gmail.png"
import Group from "../../public/images/contact/Group.png"
import Group_1 from "../../public/images/contact/Group-1.png"
import Group_2 from "../../public/images/contact/Group-2.png"
import GoogleMap from "../../public/images/GoogleMap.png"

const Contact = () => {
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
                <h2 className="text-white text-4xl font-bold uppercase">Liên hệ</h2>
                <div className="w-24 h-1 bg-[#5FC3F7] mt-2"></div>
              </div>
            </div>
            <div
              className="w-full mt-20 bg-red relative flex items-center justify-center"
            >
                <div
                  className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(${backgroundImage.src})`
                  }}
                >
                  <div className="p-6 ml-0 md:ml-20 bg-transparent">
                    <h3 className="text-2xl font-bold mb-4 text-[#26256A]">THÔNG TIN PHÁP LÝ</h3>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                      <span className="text-[#333333] font-semibold">Tên Công Ty:</span>
                      <span className="text-[#333333] col-span-2">CÔNG TY TNHH KIỂM TOÁN VÀ TƯ VẤN ISTAR</span>

                      <span className="text-[#333333] font-semibold">Tên Quốc Tế:</span>
                      <span className="text-[#333333] col-span-2">ISTAR CONSULTANT AND AUDIT COMPANY LIMITED</span>

                      <span className="text-[#333333] font-semibold">Tên Viết Tắt:</span>
                      <span className="text-[#333333] col-span-2">ISTAR AUDIT</span>

                      <span className="text-[#333333] font-semibold">Trụ Sở Chính:</span>
                      <span className="text-[#333333] col-span-2">
                        Phòng 01, Tầng 32, Tòa G3 Khu CNCX Vinhomes Greenbay, Đường Đại Lộ Thăng Long,
                        Phường Mễ Trì, Quận Nam Từ Liêm, Thành Phố Hà Nội, Việt Nam
                      </span>

                      <span className="text-[#333333] font-semibold">Văn Phòng:</span>
                      <span className="text-[#333333] col-span-2">
                        Số nhà 24 Lô TT03, KĐT HDMon, Phố Hàm Nghi, Phường Mỹ Đình 2, Quận Nam Từ Liêm,
                        Thành Phố Hà Nội, Việt Nam
                      </span>

                      <span className="text-[#333333] font-semibold">Mã Số Thuế:</span>
                      <span className="text-[#333333] col-span-2">0109239212</span>

                      <span className="text-[#333333] font-semibold">Điện Thoại:</span>
                      <span className="text-[#333333] col-span-2">(+84) 989 326 246</span>

                      <span className="text-[#333333] font-semibold">Email:</span>
                      <span className="text-[#333333] col-span-2">istar.audit@gmail.com</span>
                    </div>
                  </div>
                  <div className="p-6 mx-0 sm:mx-20 md:mx-40 bg-white rounded">
                    <div className="text-center">
                      <p className="text-md text-[#8C8C8C] my-2">Gửi thông tin để nhận tư vấn</p>
                      <h3 className="text-2xl mb-8 font-bold text-[#26256A] mt-1">NGAY BÂY GIỜ</h3>
                    </div>
                    <form className="space-y-4">
                      <Input
                        placeholder="Số điện thoại*"
                        size="large"
                        className="w-full mb-4 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5FC3F7]"
                      />
                      <Input
                        placeholder="Email"
                        size="large"
                        className="w-full mb-4 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5FC3F7]"
                      />
                      <Input.TextArea
                        placeholder="Nội dung yêu cầu*"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#5FC3F7]"
                        rows={4}
                      />
                      <Button
                        type="primary"
                        size="large"
                        className="bg-[#26256A] w-full text-white hover:bg-[#464677] px-6 py-2 rounded font-bold"
                      >
                        Gửi Yêu Cầu
                      </Button>
                    </form>
                  </div>
                </div>
            </div>
            <div className="flex justify-start mx-2 md:mx-30 space-x-4">
              <Image
                src={Facebook}
                alt="Facebook"
                className="object-cover"
              />
              <Image
                src={Youtube}
                alt="Youtube"
                className="object-cover"
              />
              <Image
                src={Gmail}
                alt="Gmail"
                className="object-cover"
              />
            </div>
            <div className="w-full bg-[#FFFFFF] text-black flex justify-center p-8">
              <div className="w-full mx-0 md:mx-30 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#F5F5F5] rounded shadow-md text-center flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                        <Image
                          src={Group}
                          alt="Background Image"
                          className="object-cover"
                        />
                    </div>
                    <h5 className="text-lg font-medium mb-2">Đội ngũ Kiểm toán viên</h5>
                    <p className="text-sm text-gray-600 mb-4">
                      Đội ngũ luật sư giàu kinh nghiệm của chúng tôi sẵn sàng cung cấp các giải pháp phù hợp để đáp ứng mục tiêu của bạn.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#F5F5F5] rounded shadow-md text-center flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                        <Image
                          src={Group_1}
                          alt="Background Image"
                          className="object-cover"
                        />
                    </div>
                    <h5 className="text-lg font-medium mb-2">Hỗ trợ văn bản chuyên ngành</h5>
                    <p className="text-sm text-gray-600 mb-4">
                      Đội ngũ luật sư giàu kinh nghiệm của chúng tôi sẵn sàng cung cấp các giải pháp phù hợp để đáp ứng mục tiêu của bạn.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#F5F5F5] rounded shadow-md text-center flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-4">
                        <Image
                          src={Group_2}
                          alt="Background Image"
                          className="object-cover"
                        />
                    </div>
                    <h5 className="text-lg font-medium mb-2">Tư vấn</h5>
                    <p className="text-sm text-gray-600 mb-4">
                        Đội ngũ luật sư giàu kinh nghiệm của chúng tôi sẵn sàng cung cấp các giải pháp phù hợp để đáp ứng mục tiêu của bạn.                  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-8 rounded shadow-md">
              <div className="flex items-center self-start mb-4 ml-0 md:ml-30">
                <Image
                  src={GoogleMap}
                  alt="Google Map Icon"
                  className="object-cover w-8 h-8 mr-2"
                />
                <h3 className="text-lg font-bold text-black">Xem bản đồ Google maps</h3>
              </div>
              <div className="w-full md:w-[1150px] h-[300px] md:h-[600px] rounded overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7844174361546!2d105.7677464!3d21.0347416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134550051ef29db%3A0xae5d0c48ea17bef7!2sIstar!5e0!3m2!1svi!2s!4v1689754061764!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
