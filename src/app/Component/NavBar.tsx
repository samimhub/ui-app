"use client"

import React, { useState } from 'react'
import { LiaUserSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Menus } from '@/ProjectData'


function NavBar() {

    const [open, setOpen] = useState(true);
  
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-0 "
        } bg-blue-400 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/right-arrow.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
        <LiaUserSolid />
          <h5
            className={`text-white origin-left font-md text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Hello,Users
          </h5>
          <IoMdNotificationsOutline/>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/${Menu.src}.png`} alt='menu' width={20} height={20}/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      </div>
  )
}

export default NavBar
