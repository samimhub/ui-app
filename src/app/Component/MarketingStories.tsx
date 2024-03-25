"use client";

import { MarketDetails } from "@/ProjectData";
import Image from "next/image";

function MarketingStories() {
  return (
    <section className="max-container padding-container gap-8">
      <div className=" grid gap-8 md:grid-cols-1">
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
  <div className="flex lg:w-1/2 flex-1 flex-col items-center justify-center rounded-md border overflow-hidden">
   
      <div className="group-hover:scale-110 transition-all duration-1000">
        <Image src={ImgURL} alt="map" width={444} height={200}/>
      </div>
      <div className="px-6 py-2">
      <h3 className=" my-2 capitalize">{title}</h3>
      <p className="regular-16 text-gray-30">{description}</p>
    </div>
  </div>
)
}
export default MarketingStories
