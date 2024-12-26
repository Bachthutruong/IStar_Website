"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import reason from "../../public/images/reason.png"
const About = () => {
  return (
    <>
      <section className="">
        <div className="">
          <div className="flex flex-col md:flex-row items-stretch h-full">

            <div className="w-full md:w-1/2 bg-[#2C2C52] text-white flex flex-col justify-center p-8">
              <p className="mb-5 text-3xl font-bold mx-0 md:mx-16">
                LÝ DO KHÁCH HÀNG CHỌN CHÚNG TÔI
              </p>
              <p className="mb-5 text-xl font-bold mx-0 md:mx-16">
                Độc Lập - Trách Nhiệm - Tin cậy- Hài Lòng
              </p>
              <p className="leading-relaxed mx-0 md:mx-16">
                Đây chính là sứ mệnh của công ty. ISTAR hoạt động “độc lập”, thực hiện “trách nhiệm” một cách “tin cậy” để đảm bảo sự “hài lòng” trọn vẹn cho khách hàng;
              </p>
              <p className="leading-relaxed mx-0 md:mx-16">
                Bảo mật thông tin: Điều kiện tiên quyết để chúng tôi hoạt động là bảo mật thông tin khách hàng;
              </p>
              <p className="leading-relaxed mx-0 md:mx-16">
                Thời gian nhanh chóng: Thời gian giải quyết công việc của chúng tôi luôn nhanh nhất có thể để khách hàng hài lòng;
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
              <Image
                src={reason}
                alt="Left Image"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
