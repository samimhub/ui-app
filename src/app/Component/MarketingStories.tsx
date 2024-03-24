"use client";

import { MarketDetails } from "@/ProjectData";
import Image from "next/image";

function MarketingStories() {
  return (
    <section className="max-container padding-container gap-8 
 bg-[#f7f7f7]">
      <div className=" grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {
          MarketDetails.map((details)=>(
            <PortfolioItem
            key={details.title}
            ImgURL={details.ImgUrl}
            title={details.title}
            description={details.description}
            />
          ))
        }
      </div>
    </section>
  );
}

type PortfolioItem={
  title:string;
  ImgURL:string;
  description:string;
}
const PortfolioItem =({title,ImgURL,description}:PortfolioItem) =>{
return(
  <div className="relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group">
   
      <div className="group-hover:scale-110 transition-all duration-1000">
        <Image src={ImgURL} alt="map" width={444} height={444}/>
      </div>
      <div className="px-6 py-4">
      <h3 className="bold-18 lg:bold-20 my-4 capitalize">{title}</h3>
      <p className="regular-16 text-gray-30 mb-4">{description}</p>
    </div>
  </div>
)
}
export default MarketingStories
