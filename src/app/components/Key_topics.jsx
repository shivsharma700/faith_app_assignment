import { IoMdCheckmark } from 'react-icons/io'

const Key_topics = () => {
  return (
    <div className="w-[45%]" >
      <div className="heading my-[1rem] text-xl text-slate-900 font-semibold ">Key topics covered</div>
      <div>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text
      </div>
      <div className=' my-[0.5rem] flex flex-col gap-2 ' >
        <div className=" flex flex-row gap-4 items-start " >
          <IoMdCheckmark className=" text-2xl text-green-700" />
          <span>
          <span className=' font-semibold ' >10 written and audio sessions</span> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.
          </span>
        </div>
        <div className=" flex flex-row gap-4 items-start " >
          <IoMdCheckmark className=" text-2xl text-green-700" />
          <span>
          <span className=' font-semibold ' >Intuitive exercises and homework</span> walk you through the energies and values of numbers and number sequences so you can become your own authority.
          </span>
        </div>
        <div className=" flex flex-row gap-4 items-start " >
          <IoMdCheckmark className=" text-2xl text-green-700" />
          <span>
          <span className=' font-semibold ' >Handy reference</span> to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.
          </span>  
        </div>
        <div className=" flex flex-row gap-4 items-start " >
          <IoMdCheckmark className=" text-2xl text-green-700" /> 
          <span>
          <span className=' font-semibold '>Expert techniques</span> for manifestation offer simple ways to use numbers to co-create with the universe.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Key_topics