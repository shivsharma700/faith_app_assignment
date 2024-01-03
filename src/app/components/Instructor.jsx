import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImYoutube } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

const Instructor = () => {
  return (
    <div>
      <div className="heading mt-[4rem] mb-[0.8rem] text-xl text-slate-900 font-semibold ">About the Instructor</div>
      <div className=" flex flex-row gap-5 " >
        <div className="avatar h-[10rem] w-[10rem] rounded-[50%] overflow-hidden ">
            <img src="https://pbs.twimg.com/profile_images/1650049387224080384/WAVo3FHK_400x400.jpg" alt="" />
        </div>
        <div className=" w-[40%] " >
            <span>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            </span>
        </div>
        <div className=" w-[40%] " >
            <span>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet            </span>
        </div>
      </div>
      <div className=" ml-[11rem] mt-2 flex flex-row gap-[8rem] " >
            <div className=" flex flex-row justify-center items-center gap-2 " > <SiFacebook className="text-blue-700" /> Facebook</div>
            <div className=" flex flex-row justify-center items-center gap-2 "><FaSquareXTwitter /> Twitter</div>
            <div className=" flex flex-row justify-center items-center gap-2 "><ImYoutube className="text-red-700" /> Youtube</div>
            <div className=" flex flex-row justify-center items-center gap-2 "><FaInstagramSquare className="text-rose-700" /> Instagram</div>
        </div>
    </div>
  )
}

export default Instructor