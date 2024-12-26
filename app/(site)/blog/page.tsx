"use client";

import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Image from "next/image";
import background from "../../../public/images/about/background-image.png";
import { useState } from "react";
import { Pagination } from "antd";
const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9; 
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = BlogData.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section id="blog" className="bg-white">
        <div className="w-full md:h-full h-[300px] relative">
          <Image
            src={background}
            alt="Background Image"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-white text-4xl font-bold uppercase">Tin Tức</h2>
            <div className="w-24 h-1 bg-[#5FC3F7] mt-2"></div>
          </div>
        </div>

        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {currentData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
          <div className="flex justify-end mt-10 mb-2">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={BlogData.length}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default BlogPage;
