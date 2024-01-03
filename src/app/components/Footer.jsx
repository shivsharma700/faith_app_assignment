import {data} from '../data/data'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-row justify-center items-center mb-8 mt-[6rem] mx-[2rem] h-[12rem] bg-slate-100 " >
        <div className=' w-[30%] flex justify-center items-center ' >
            <button className=' bg-slate-200 hover:bg-slate-300 w-6 h-6 flex justify-center items-center rounded-[50%] ' ><FaChevronLeft /></button>
        </div>
        <div className="middle font-medium w-[40%] text-center ">
            <div className="text">
            "{data.testimonial.text}"
            </div>
            <div className=' mt-[1rem] flex flex-row justify-center ' >
                <div className="img w-[3rem] h-[3rem] rounded-[50%] overflow-hidden">
                    <img src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2021/05/edit-Kiran-Jonnalagadda.jpg" alt="" />
                </div>
                <div className="name description text-start">
                    <div className="name"> {data.testimonial.reviewer_name} </div>
                    <div>{data.testimonial.reviewer_designation}</div>
                </div>
            </div>
        </div>
        <div className=' w-[30%] flex justify-center items-center ' >
            <button className=' bg-slate-200 hover:bg-slate-300 w-6 h-6 flex justify-center items-center rounded-[50%] ' ><FaChevronRight /></button>
        </div>
    </div>
  )
}

export default Footer