import { RxTimer } from "react-icons/rx";

function BlogCard({blog}) {


    // time format
    function formatTimestamp(timestampStr) {
        const date = new Date(timestampStr);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options); // 'en-GB' gives us DD Mon YYYY format
      }

  return (
    <div>
        <div className="relative group h-[450px] transition-all duration-500 overflow-hidden rounded-xl">

            <div className="flex items-center  gap-1 text-[#0e69b3] rounded-bl-lg z-[8] font-medium absolute px-4 py-2 top-0 right-0 bg-[#E6EFF7]">
            <RxTimer />
            {blog?.read_time_minute} min read
            </div>
            <img className="w-full h-full object-cover z-[2] absolute top-0 left-0 group-hover:scale-110 transition-all duration-500 " src={blog?.image} alt="" />

            <div className="bg-black/30 absolute w-full h-full left-0 top-0 z-[4] ">

            </div>

            <div className=" absolute z-[8]  flex flex-col w-full  rounded-lg  bottom-0">

                <div className="flex items-center gap-2  bg-white left-0 rounded-tr-lg rounded-t-lg w-[200px]  rounde-lg px-4  py-4">
                    <img className="w-10 h-10 rounded-full object-cover" src={blog?.author?.image} alt="" />
                    <div className="flex flex-col ">
                    <h4 className="pb-1 text-sm">Ranald Rechards</h4>
                    <h4 className="text-xs text-black/80">{formatTimestamp(blog?.created_at)}</h4>
                    </div>
                </div>

                <div className=" bg-white w-full rounded-r-lg left-0 right-0 p-4  ">
                    <h3 className="text-2xl font-medium ">{blog?.title}</h3>

                    <p className=" py-2 text-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 h-0 group-hover:h-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos cum autem reprehenderit aspernatur natus ut harum ad vel blanditiis.</p>
                </div>

                <div className="flex items-center gap-4 top-10 right-4 absolute ">
                <h4 className="bg-[#c2eae4] text-xs rounded-md font-medium px-2 py-1">UI/UX</h4>
                <h4 className="bg-[#c2eae4] text-xs font-medium rounded-md px-2 py-1 ">Design</h4>
            </div>

            </div>

           
            
        </div>
    </div>
  )
}

export default BlogCard