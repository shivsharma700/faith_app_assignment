import { useEffect, useState } from "react"

const Section = () => {

    const [mp, setmp] = useState({
        "about" : true,
        "instructor" : false,
        "reviews": false
    })

    function borderBottom(text){
        let newMp = {
            "about" : false,
            "instructor" : false,
            "reviews": false
        }
        newMp[text] = true;
        setmp({
            ...newMp
        })
    }

  return (
    <div className="sections text-md flex flex-row w-[40%] " >
        <div
         onClick={() => borderBottom("about")}
         className={`w-[8rem] h-[2.4rem]  text-slate-800 ${mp["about"] == true? "border-b-[2px] border-blue-500" : ""} hover:bg-slate-200 flex items-center justify-center tracking-wide `}
        >ABOUT</div>
        <div 
         onClick={() => borderBottom("instructor")} 
         className={`w-[8rem] h-[2.4rem]  text-slate-800 ${mp["instructor"] == true? "border-b-[2px] border-blue-500" : ""} hover:bg-slate-200 flex items-center justify-center tracking-wide `}        >INSTRUCTOR</div>
        <div 
         onClick={() => borderBottom("reviews")} 
         className={`w-[8rem] h-[2.4rem] text-slate-800 ${mp["reviews"] == true? "border-b-[2px] border-blue-500" : ""} hover:bg-slate-200 flex items-center justify-center tracking-wide `}        >REVIEWS</div>
    </div>
  ) 
}

export default Section