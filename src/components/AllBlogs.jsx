import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import axios from "axios";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import Loader from "./Loader";
const AllBlogs = () => {

  const [currentSlug, setCurrentSlug]= useState('the-power-of-blockchain-beyond-money-simple-explor')


  // blogsCategory
  const { data: blogsCategory = [] } = useQuery({
    queryKey: ["Blogs_category"],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/blogs/categories/`
      );
      console.log(result?.data);
      const filteredCategory = result?.data.filter(
        (category) => category.total_blog > 0
      );

      return filteredCategory;
    },
  });

  console.log("filteredCategory", blogsCategory);

  // blogs
  const { data: blogsData = [], isLoading } = useQuery({
    queryKey: ["Blogs", currentSlug],
    queryFn: async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/blogs/`
      );

      const filteredBlogs = result?.data?.results.filter(blog=> blog.slug === currentSlug)
      console.log( 'filteredBlogs', filteredBlogs)
      return result?.data?.results;
    },
  });


  console.log(blogsData)

  // const handleFilter = (slug) => {
  //  setCurrentSlug(slug)
  // }

  return (
    <div className="">
      <div className="flex items-center w-full justify-center gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        <div>
          <button
         
            className={`sm:py-[11px] py-1 flex gap-2 items-center  uppercase  sm:px-6 px-4 border rounded-3xl bg-[#0060af] text-white `}
          >
            All
            {/* <span className={`px-[6px] py-1 flex items-center text-black justify-center rounded-lg ms-1 bg-[#EAECF0] h-[20px]  `}>
              5
            </span> */}
          </button>
        </div>

        {blogsCategory.map((category) => (
          <div key={category.id}>
            <button
             onClick={() => handleFilter(category?.slug)}
              className={` sm:py-[11px] py-1 flex gap-2 items-center  uppercase  sm:px-6 px-4 border rounded-3xl bg-white`}
            >
              {category?.name}
              <span
                className={`px-[6px] py-1 flex items-center justify-center rounded-lg ms-1 bg-[#EAECF0] h-[20px] `}
              >
                {category?.total_blog}
              </span>
            </button>
          </div>
        ))}

        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl bg-white`}
          >
            Node.js{" "}
            <span
              className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px]`}
            >
              5
            </span>
          </button>
        </div>
      </div>

      {/* blogs card */}

      <div className="grid w-full grid-cols-3 gap-8 py-24">
        {
          isLoading ?  <div className="col-span-3  justify-center block items-center"><Loader></Loader></div> :  blogsData.map((blog) => (
            <motion.div>
              <BlogCard key={blog.id} blog={blog}></BlogCard>
            </motion.div>
          ))
        }
      </div>

     <div className="flex justify-center  w-full pb-4">
     <button className="px-10 py-4 bg-[#0060af] rounded-xl  group transition-all duration-300"><MoveRight color="white" className="group-hover:translate-x-2 transition-all duration-300"  /></button>
     </div>
    </div>
  );
};

export default AllBlogs;
