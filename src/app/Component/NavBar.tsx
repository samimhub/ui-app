"use client"

import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


function SideBar({open}:{open:boolean}){
  if(open) return null;
  
  return(
    <div className='bg-black text-white w-[300px] p-5'>
      <h1 className='text-2xl font-bold text-center cursor-pointer'>
        <span className='text-purple-500'>Go</span>India Stocks
      </h1>
      <div className='my-5 space-y-5'>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-5 border-2 border-purple-500 text-white flex items-center rounded"'>
          Disscussion Froum
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-5 border-2 border-purple-500 text-white flex items-center rounded"'>
          Market Stories
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-5 border-2 border-purple-500 text-white flex items-center rounded"'>
          Sentiment
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-5 border-2 border-purple-500 text-white flex items-center rounded"'>
          Market
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-5 border-2 border-purple-500 text-white flex items-center rounded"'>
          Sector
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-5 border-2 border-purple-500 text-white flex items-center rounded"'>
          Watchlist
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-5 border-2 border-purple-500 text-white flex items-center rounded"'>
          Market Stories
        </div>
      </div>
    </div>
  )
}

function ActionButton({open,setOpen}:{open:boolean,setOpen:any}){
    return(
      <div className='flex flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center cursor-pointer h-[100px] bg-purple-500'
             onClick={()=>setOpen(!open)}>
          {open ?(
          <FaArrowRight className="text-2xl bg-white rounded-full"/>
          ):(
          <FaArrowLeft className="text-2xl bg-white rounded-full"/>
          )}

        </div>
      </div>
    )
}


function NavBar() {

    const [open, setOpen] = useState(true);
  
  return (
    <div className="flex">
      <SideBar open={open}/>
      <ActionButton setOpen={setOpen} open={open}/>
      
    </div>
  )
}

export default NavBar
