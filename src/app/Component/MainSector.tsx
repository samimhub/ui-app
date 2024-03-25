"use client";

import { useState } from "react";
import DisscussionCard from "./DisscussionCard";
import Headers from "./Headers";
import MarketingStories from "./MarketingStories";

function MainSector() {

    const [page, setPage] = useState(1);
  return (
    <div className="space-y-5 z-2">
      <Headers page={page} setPage={setPage} />
      {/*Display for desktop view*/}
      <div className="hidden lg:grid grid-cols-[3fr_1.5fr] p-5 gap-5 ">
        <div>
          <DisscussionCard/>
        </div>
        <div>
          <MarketingStories/>
        </div>
      </div>

      {/*Display for Mobile view*/ }

      <div className="lg:hidden px-5">
      {page === 1 && <DisscussionCard />}
      {page === 2 && <MarketingStories />}
      </div>
    </div>
  )
}

export default MainSector

