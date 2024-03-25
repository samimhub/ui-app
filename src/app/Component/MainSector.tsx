"use client";

import { useState } from "react";
import DisscussionCard from "./DisscussionCard";
import MarketingStories from "./MarketingStories";
import Headers from "./Headers";

function MainSector() {

    const [page, setPage] = useState(1);
  return (
    <div className="space-y-5 z-2">
      <Headers page={page} setPage={setPage} />
      {/*Display for desktop view*/}
      <div className="hidden lg:flex space-x-16 ">
        <div>
          <DisscussionCard/>
        </div>
        <div>
          <MarketingStories/>
        </div>
      </div>

      {/*Display for Mobile view*/ }

      <div className="lg:hidden">
      {page === 1 && <DisscussionCard />}
      {page === 2 && <MarketingStories />}
      </div>
    </div>
  )
}

export default MainSector

