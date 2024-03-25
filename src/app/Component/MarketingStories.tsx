"use client";

import { MarketDetails } from "@/ProjectData";
import Image from "next/image";

    function MarketingStories() {
      return (
        <section className="flex flex-col gap-5 items-center">
          {MarketDetails.map((details) => (
            <PortfolioItem
              key={details.title}
              ImgURL={details.ImgUrl}
              title={details.title}
              description={details.description}
            />
          ))}
      </section>
    );
    }


type PortfolioItem={
  title:string;
  ImgURL:string;
  description:string;
}
const PortfolioItem = ({ title, ImgURL, description }: PortfolioItem) => {
  return (
    <div className="rounded-md border shadow overflow-hidden w-full ">
      <div>
        <Image
          src={ImgURL}
          alt="map"
          width={444}
          height={200}
          className="object-cover w-full h-52"
        />
      </div>
      <div className="px-6 py-2">
        <h3 className="font-semibold text-xl uppercase">{title}</h3>
        <p className="regular-16 text-gray-600 w-100">{description}</p>
      </div>
    </div>
  );
};
export default MarketingStories
