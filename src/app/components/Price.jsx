import { data } from "../data/data"
import { RxVideo } from "react-icons/rx";
import { IoMdChatboxes } from "react-icons/io";

const Price = () => {
  return (
    <div className=" rounded-md p-4 left-[55%] top-[21rem] w-[21rem] bg-slate-100 absolute " >
        <div className="title text-sm font-medium ">
            Course fees
        </div>
        <div className="price text-xl font-semibold ">
        ₹{data.course.fee.amount}
        </div>
        <div className=" text-[12px]  " >
            <div className="title mt-3 mb-1 text-sm font-medium"> What's included:</div>
            <div className="flex flex-row items-center gap-2 " > <RxVideo/> 5 on demand videos</div>
            <div className="flex flex-row items-center gap-2 " > <RxVideo/>2 livestream sessions</div>
            <div className="flex flex-row items-center gap-2 " > <IoMdChatboxes /> Live Q&A sessions with Nityanand charan das</div>
            <div className="flex flex-row items-center gap-2 " ><IoMdChatboxes /> An active whatsapp community</div>
        </div>
        <button className=" mt-6 bg-indigo-800 hover:bg-purple-900 rounded-[1rem] w-full h-8 text-white " >Register Today</button>
    </div>
  )
}

export default Price