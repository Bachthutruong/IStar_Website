"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo_footer from "../../public/images/logo/logo_footer.png"
const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-[#181936] dark:border-strokedark dark:bg-blacksection">
        <div className="mx-4 md:mx-20 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    src={logo_footer}
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    src={logo_footer}
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5 text-white text-xl">
                  Kết nối với chúng tôi
                </p>

              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top flex-1"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-white dark:text-white">
                    Về ISTAR
                  </h4>
                  <ul>
                    <li>
                      <a href="/about-us" className="mb-3 inline-block hover:text-[#FFFFFF]">
                        Về chúng tôi
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="mb-3 inline-block hover:text-[#FFFFFF]">
                        Liên hệ
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="mb-3 inline-block hover:text-[#FFFFFF]">
                        Tin tức
                      </a>
                    </li>
                    <li>
                      <a href="/support" className="mb-3 inline-block hover:text-[#FFFFFF]">
                        Tuyển dụng
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top flex-1"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-white dark:text-white">
                    Dịch Vụ
                  </h4>
                  <ul>
                    <li>
                      <a href="/main" className="mb-3 inline-block hover:text-white">
                        Kiểm toán và báo cáo tài chính
                      </a>
                    </li>
                    <li>
                      <a href="/main" className="mb-3 inline-block hover:text-white">
                        Kiểm toán xây dựng cơ bản
                      </a>
                    </li>
                    <li>
                      <a href="/main" className="mb-3 inline-block hover:text-white">
                        Kế toán, thuế
                      </a>
                    </li>
                    <li>
                      <a href="/main" className="mb-3 inline-block hover:text-white">
                        Chuyên ngành khác
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top flex-1"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-white dark:text-white">
                    Thông tin liên hệ
                  </h4>
                  <p className="mb-4">
                    Để lại thông tin của bạn, chúng tôi sẽ liên hệ và giải đáp tất cả thắc mắc
                    cho quý khách hàng!
                  </p>
                  <form action="#">
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Enter email"
                        className="w-full rounded-lg border border-blue-500 bg-[#292A40] px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        aria-label="signup to newsletter"
                        className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center justify-center w-[60px] p-2 rounded-lg bg-[#5FC3F7] shadow hover:bg-blue-600 focus:outline-none"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 12L19 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 5L19 12L12 19"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                  </form>
                </motion.div>
              </div>

            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-[#262626] py-7 dark:border-[#262626] lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} | All Rights Reserved - ISTAR
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              Privacy Policy | Terms of Use
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
