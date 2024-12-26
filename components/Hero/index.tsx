"use client";
import Image from "next/image";
import image_left from "../../public/images/background/image_left.png";

const Hero = () => {
  return (
    <>
      <section className="">
        <div className="">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 relative">
              <Image
                src={image_left}
                alt="Left Image"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#2C2C52] text-white flex flex-col justify-center p-8">
              <h4 className="mb-4.5 text-lg font-medium text-[#A4DEFC] mx-0 md:mx-16">
                Đối tác đáng tin cậy của bạn
              </h4>
              <p className="mb-5 text-3xl font-bold mx-0 md:mx-16">
                NIỀM TIN CỦA KHÁCH HÀNG LÀ NỀN TẢNG CHO SỰ PHÁT TRIỂN
              </p>
              <p className="leading-relaxed mx-0 md:mx-16">
                Với bề dày kinh nghiệm của đội ngũ nhân sự, ISTAR hoạt động "độc lập", 
                thực hiện trách nhiệm một cách "tận tụy" để đảm bảo sự "hài lòng" trọn vẹn cho khách hàng.
              </p>
              <button className="mt-6 w-[140px] md:mx-16 px-6 py-3 bg-[#A4DEFC] text-[#2C2C52] font-medium rounded hover:bg-[#89ccea]">
                Liên Hệ
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
