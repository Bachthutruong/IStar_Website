"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, company, writter } = blog;

  return (
    <>
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
        className="rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="">
          <h3 className="text-md mt-4 text-[#5FC3F7] font-semibold">
            {company}
          </h3>
          <h3 className="mb-3.5 text-lg text-black font-semibold">
            <Link href={`/blog/blog-details`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
          <h3 className="text-md mt-4 text-[#5FC3F7]">
            {writter}
          </h3>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
