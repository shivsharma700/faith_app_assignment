import './Header.css'
import {data} from "../data/data.js"

import React from 'react'
const Header = () => {
  return (
    <div className= "header " >
        <div className="content ">
            <div className="name text-slate-50 ">
                {data.instructor.name}
            </div>
            <div className="courseTitle ">
                {data.course.title}
            </div>
        </div>
    </div>
  )
}

export default Header