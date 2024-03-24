"use client";

import { useState } from "react";
import DisscussionCard from "./DisscussionCard";
import MarketingStories from "./MarketingStories";
import Headers from "./Headers";

function MainSector() {

    const [page, setPage] = useState(1);
  return (
    <div className="space-y-5">
      <Headers page={page} setPage={setPage} />
      {page === 1 && <DisscussionCard />}
      {page === 2 && <MarketingStories />}
    </div>
  )
}

export default MainSector

