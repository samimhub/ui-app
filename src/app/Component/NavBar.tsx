"use client";

import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { VscCommentDiscussion } from "react-icons/vsc";
import { SiCoinmarketcap } from "react-icons/si";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { RxSection } from "react-icons/rx";
import { MdPreview } from "react-icons/md";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";

function SideBar({open}:{open:boolean}){
  if(open) return null;
  
  return(
    <div className='bg-black text-white h-screen w-[300px] space-y-7 p-5'>
      <h1 className='text-2xl font-bold text-center cursor-pointer'>
        <span className='text-purple-500'>Go</span>India Stocks
      </h1>
      <div className='my-5 space-y-5'>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-2 border-2 rounded-md border-purple-500 text-white  flex items-center rounded"'>
          <span className='px-2'><VscCommentDiscussion /></span> Disscussion Froum
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-2 border-2 rounded-md border-purple-500 text-white flex items-center rounded"'>
          <span className='px-2'><FaHistory /></span> Market Stories
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-2 border-2 rounded-md border-purple-500 text-white flex items-center rounded"'>
          <span className='px-2'><MdOutlineSentimentVeryDissatisfied /></span> Sentiment
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-2 border-2 rounded-md border-purple-500 text-white flex items-center rounded"'>
          <span className='px-2'><SiCoinmarketcap/> </span> Market
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-2 border-2 rounded-md border-purple-500 text-white flex items-center rounded"'>
         <span className='px-2'><RxSection /></span> Sector
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-2 border-2 rounded-md border-purple-500 text-white flex items-center rounded"'>
          <span className='px-2'><MdPreview /></span> Watchlist
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-2 border-2 rounded-md border-purple-500 text-white flex items-center rounded"'>
          <span className='px-2'><MdOutlineEmojiEvents /></span> Events
        </div>
        <div className='"hover:bg-purple-500 transition-all delay-100 cursor-pointer p-2 border-2 rounded-md border-purple-500 text-white flex items-center rounded"'>
          <span className='px-2'><ImNewspaper /> </span> News/Interwiev
        </div>
      </div>
    </div>
  )
}

function ActionButton({open,setOpen}:{open:boolean,setOpen:any}){
    return(
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center cursor-pointer h-[100px] bg-purple-500'
             onClick={()=>setOpen(!open)}>
          {open ?(
          <FaArrowRight/>
          ):(
          <FaArrowLeft/>
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
