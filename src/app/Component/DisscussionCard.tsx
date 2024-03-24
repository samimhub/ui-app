import {DisscussionDetails} from "@/ProjectData"
import Image from "next/image"
import React from 'react'

function DisscussionCard() {
  return (
    <section>
        <ul className=" grid gap-5 md:grid-cols-1 lg:grid-cols-1">
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
         <div className="flex w-full items-start gap-5 rounded-2xl border p-4 overflow-hidden bg-slate-200 shadow ">
            <div className="flex flex-col">
             <Image src={ImgUrl} alt="user" width={75} height={75} className="rounded-full shadow-2xl border-4
            border-white"/>
            </div>
            <h3 className='blod-20 lg:bold-22 capitalize group-hover:text-white text-2xl font-bold'>{title}</h3>
            <p>{description}</p>
            <div>
            </div>
        </div>
        </>
       
    )
}


export default DisscussionCard
