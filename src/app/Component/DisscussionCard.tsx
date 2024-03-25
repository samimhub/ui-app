import {DisscussionDetails} from "@/ProjectData"
import Image from "next/image"
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { BiComment } from "react-icons/bi";
import { GoShareAndroid } from "react-icons/go";

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

const DisscussionItems = ({ ImgUrl, title, description }: DisscussionItems) => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-start gap-5 rounded-2xl border p-4 overflow-hidden bg-slate-200 shadow">
      <div>
        <Image
          src={ImgUrl}
          alt="user"
          width={100}
          height={100}
          className="rounded-full shadow-2xl border-4
            border-white"
        />
      </div>
      <div>
        <h3 className="flex justify-between lg:bold-22 capitalize group-hover:text-white text-2xl font-bold">
          {title}
          <small className="font-">2 minutes</small>
        </h3>
        <p>{description}</p>
        <p className="flex items-center justify-between">
          <small className="flex items-center gap-1"><FaRegHeart/>2k</small>
          <small className="flex items-center gap-1"><GrView />2k</small>
          <small className="flex items-center gap-1"><BiComment/>2k Comments</small>
          <small className="flex items-center gap-1"><GoShareAndroid/>Share</small>
        </p>
      </div>
    </div>
  );
};


export default DisscussionCard
