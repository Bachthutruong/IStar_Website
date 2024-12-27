import Image from "next/image";
import background from "../../../public/images/about/background-image.png";
import file from "../../../public/images/IconFile.png"
import reason from "../../../public/images/reason.png"
import about_us from "../../../public/images/about_us.png"
import background_aboutus from "../../../public/images/background_aboutus.png"
import { Button } from "antd";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "IStar",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function AboutUsPage() {
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
                <h2 className="text-white text-4xl font-bold uppercase">Về chúng tôi</h2>
                <div className="w-24 h-1 bg-[#5FC3F7] mt-2"></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch h-full">
              <div className="w-full md:w-1/2 bg-[#A4DEFC] text-black flex flex-col justify-center p-8">
                <p className="mb-5 text-md uppercase mx-0 md:mx-16">
                  Đối tác đáng tin cậy của bạn
                </p>
                <p className="mb-5 text-3xl font-bold mx-0 md:mx-16 uppercase">
                  Niềm tin của khách hàng là nền tảng cho sự phát triển
                </p>
                <p className="leading-relaxed mx-0 md:mx-16">
                 Với bề dày kinh nghiệm của đội ngũ nhân sự, ISTAR hoạt động “độc lập”, thực hiện “trách nhiệm” một cách “tin cậy” để đảm bảo sự “hài lòng” trọn vẹn cho khách hàng.
                </p>
                <p className="leading-relaxed mx-0 md:mx-16 mt-4">
                  Với phương châm "Niềm tin của khách hàng là nền tảng cho sự phát triển", ISTAR không ngừng nâng cao chất lượng sản phẩm và dịch vụ, đảm bảo mọi cam kết được thực hiện một cách chuyên nghiệp nhất. Thông qua đội ngũ nhân viên giàu kinh nghiệm và tận tâm, chúng tôi luôn sẵn sàng lắng nghe, tư vấn và đồng hành cùng khách hàng để tìm ra giải pháp phù hợp nhất. Sự hài lòng, niềm tin của khách hàng chính là thước đo cho sự thành công và phát triển bền vững của ISTAR.
                </p>
              </div>
              <div className="w-full bg-[#A4DEFC] md:w-1/2 relative p-8">
                <Image
                  src={background_aboutus}
                  alt="Left Image"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg my-20 mx-4 bg-[#F8FCFF] md:mx-20 md:flex-row items-stretch h-full p-4 md:p-12 border border-dashed border-[#5FC3F7]">
              <div className="w-full md:w-1/3 relative">
                <Image
                  src={about_us}
                  alt="Left Image"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-full md:w-2/3 text-[#262626] flex flex-col justify-center p-8">
                <p className="leading-relaxed text-xl font-bold mx-0 my-4 md:mx-16">
                  Lời Ngỏ!
                </p>
                <p className="leading-relaxed mx-0 my-4 md:mx-16">
                  Thay mặt Ban Lãnh đạo Công ty TNHH Kiểm toán và Tư vấn ISTAR, xin gửi tới Quý vị lời chào trân trọng và lời chúc sức khỏe, thành đạt.
                </p>
                <p className="leading-relaxed mx-0 my-4 md:mx-16">
                  Thời gian nhanh chóng: Thời gian giải quyết công việc của chúng tôi luôn nhanh nhất có thể để khách hàng hài lòng;
                </p>
                <p className="leading-relaxed mx-0 my-4 md:mx-16">
                  Công ty TNHH Kiểm toán và Tư vấn ISTAR là nhà cung cấp dịch vụ chuyên ngành Kiểm toán và Tư vấn kế toán, tài chính có uy tín tại Việt Nam. Công ty tự hào có Ban lãnh đạo giàu kinh nghiệm, đội ngũ nhân viên năng động và mạng lưới chuyên gia rộng khắp, tất cả tạo nên thế mạnh vượt trội của Công ty. Đây cũng là những phẩm chất được hình thành và phát huy trong quá trình hoạt động kinh doanh của Công ty và là động lực giúp Công ty phát triển bền vững về chất lượng dịch vụ. Kết tinh trong đó là sự tín nhiệm và gắn bó của khách hàng dành cho Công ty.
                </p>
                <p className="leading-relaxed mx-0 my-4 md:mx-16">
                  Chúng tôi nhận thức rõ tầm quan trọng của khách hàng đối với sự tồn tại, phát triển của Công ty trong điều kiện thị trường cạnh tranh gay gắt như hiện nay. Chúng tôi tăng cường các dịch vụ gia tăng giá trị thực để giúp khách hàng thu được nhiều lợi ích hơn mà không phải phát sinh thêm chi phí. Có được lợi thế này là do chúng tôi phát huy yếu tố nội lực đồng thời duy trì mối quan hệ chặt chẽ với các tổ chức nghề nghiệp, chuyên gia tư vấn cấp cao giàu kinh nghiệm phục vụ khách hàng. Quý vị sẽ thấy ISTAR xứng đáng là nhà cung cấp dịch vụ tận tụy, chất lượng và hiệu quả.
                </p>
                <p className="leading-relaxed mx-0 mt-4 md:mx-16">
                  Với phương châm "Niềm tin của khách hàng là nền tảng cho sự phát triển”,                   chúng tôi nguyện tận tâm thực hiện đầy đủ cam kết của mình.
                </p>
                <p className="leading-relaxed mx-0 md:mx-16">
                  Trân trọng!
                </p>
                <p className="leading-relaxed mt-4 mx-0 md:mx-16">
                  Giám đốc Công ty
                </p>
                <p className="leading-relaxed mx-0 md:mx-16">
                  Mai Việt Hùng
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-stretch h-full">
              <div className="w-full md:w-1/2 relative">
                <Image
                  src={reason}
                  alt="Left Image"
                  className="object-cover h-full w-full"
                />
              </div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
