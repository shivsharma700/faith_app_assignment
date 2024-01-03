import { IoMdCheckmark } from "react-icons/io";

const Expect = () => {
  return (
    <div>
        <div className="heading my-[1rem] text-xl text-slate-900 font-semibold ">What to expect from the course</div>
        <div className=' flex flex-col text-slate-900 '>
            <div className=" flex flex-row gap-4 items-center " >
              <IoMdCheckmark className=" text-xl text-green-700" /> <span>Learn to mange your relationships</span>
            </div>
            <div className=" flex flex-row gap-4 items-center " >
              <IoMdCheckmark className=" text-xl text-green-700" /> <span>Better communication</span>
            </div>
            <div className=" flex flex-row gap-4 items-center " >
              <IoMdCheckmark className=" text-xl text-green-700" />  <span>Time management</span>
            </div>
            <div className=" flex flex-row gap-4 items-center " >
              <IoMdCheckmark className=" text-xl text-green-700" /> <span>Forgiveness</span>
            </div>
        </div>
    </div>
  )
}

export default Expect