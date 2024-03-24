import {DisscussionDetails} from "@/ProjectData"
import Image from "next/image"
import React from 'react'

function DisscussionCard() {
  return (
    <section>
        <ul className="mt-12 grid gap-14 md:grid-cols-1 lg:grid-cols-1 w-[95%] m-auto">
        {
          DisscussionDetails.map((details)=>(
            <DisscussionItems
            key={details.title}
            ImgUrl={details.ImgUrl}
            title={details.title}
            description={details.description}
            />
          ))
        }
      </ul>
    </section>
    
)
}

type DisscussionItems={
    ImgUrl:string;
    title:string;
    description:string;
}

const DisscussionItems=({ImgUrl,title,description}:DisscussionItems)=>{
    return(
        <>
         <li className="relative flex w-full flex-1 flex-col rounded-2xl border p-4 overflow-hidden ">
            <div className="absolute">
             <Image src={ImgUrl} alt="user" width={40} height={40} className="rounded-full shadow-2xl border-4
            border-white"/>
            </div>
            <h3 className='blod-20 lg:bold-22 mt-6 capitalize group-hover:text-white'>{title}</h3>
            <p>{description}</p>
            <div>

            </div>
        </li>
        </>
       
    )
}


export default DisscussionCard
