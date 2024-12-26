import { Metadata } from "next";
import Image from "next/image";
import background from "../../../public/images/about/background-image.png";
import file from "../../../public/images/IconFile.png"
import { Button } from "antd";
export const metadata: Metadata = {
  title: "IStar",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function MainFieldPage() {
  return (
    <>
      <section className="">
        <div className="">
          <div className="flex flex-col items-stretch h-full">
            <div className="w-full md:h-full h-[300px] relative">
            <Image
              src={background}
              alt="Background Image"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-white text-4xl font-bold uppercase">Lĩnh Vực Chính</h2>
              <div className="w-24 h-1 bg-[#5FC3F7] mt-2"></div>
            </div>
          </div>
          <div className="w-full bg-[#FFFFFF] text-black flex justify-center p-8">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#F5F5F5] rounded shadow-md text-center flex flex-col justify-between">
                <div>
                  <div className="flex justify-center mb-4">
                      <Image
                        src={file}
                        alt="Background Image"
                        className="object-cover"
                      />
                  </div>
                  <h5 className="text-lg font-medium mb-2">Dịch vụ kiểm toán và báo cáo tài chính</h5>
                  <p className="text-sm text-gray-600 mb-4">
                    Chúng tôi là đơn vị hàng đầu trong cung cấp các dịch vụ tin cậy về kiểm toán báo cáo tài chính, soát xét thông tin tài chính, kiểm toán về các công việc đặc biệt
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button size='large' className="w-1/2 text-white hover:bg-[#464677] bg-[#26256A]">
                    Tìm hiểu thêm
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-[#F5F5F5] rounded shadow-md text-center flex flex-col justify-between">
                <div>
                  <div className="flex justify-center mb-4">
                      <Image
                        src={file}
                        alt="Background Image"
                        className="object-cover"
                      />
                  </div>
                  <h5 className="text-lg font-medium mb-2">Dịch vụ kiểm toán xây dựng cơ bản</h5>
                  <p className="text-sm text-gray-600 mb-4">
                    Kiểm tra đánh giá tính pháp lý của Dự án và việc tuân thủ trình tự thủ tục đầu tư xây dựng công trình, kiểm tra chi phí đầu tư, Kiểm tra giá trị tài sản hình thành qua đầu tư
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button size='large' className="w-1/2 text-white hover:bg-[#464677] bg-[#26256A]">
                    Tìm hiểu thêm
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-[#F5F5F5] rounded shadow-md text-center flex flex-col justify-between">
                <div>
                  <div className="flex justify-center mb-4">
                      <Image
                        src={file}
                        alt="Background Image"
                        className="object-cover"
                      />
                  </div>
                  <h5 className="text-lg font-medium mb-2">Dịch vụ kế toán, thuế</h5>
                  <p className="text-sm text-gray-600 mb-4">
                    Dịch vụ mà chúng tôi cung cấp cho khách hàng rất đa dạng, bao gồm tư vấn thuế thu nhập doanh nghiệp, thuế giá trị gia tăng, thuế xuất nhập khẩu, thuế nhà thầu nước ngoài…
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button size='large' className="w-1/2 text-white hover:bg-[#464677] bg-[#26256A]">
                    Tìm hiểu thêm
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-[#F5F5F5] rounded shadow-md text-center col-span-1 mx-auto justify-self-center flex flex-col justify-between">
                <div>
                  <div className="flex justify-center mb-4">
                      <Image
                        src={file}
                        alt="Background Image"
                        className="object-cover"
                      />
                  </div>
                  <h5 className="text-lg font-medium mb-2">Dịch vụ chuyên ngành khác</h5>
                  <p className="text-sm text-gray-600 mb-4">
                    Đội ngũ chuyên gia của chúng tôi sẽ giúp khách hàng định hướng xuyên suốt quy trình phức tạp và rời rạc, sao cho khách hàng có thể giải quyết được mọi vấn đề phát sinh và đưa ra quyết định đúng đắn
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button size='large' className="w-1/2 text-white hover:bg-[#464677] bg-[#26256A]">
                    Tìm hiểu thêm
                  </Button>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>
    </>
  );
}
