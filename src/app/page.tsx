

import DisscussionCard from "./Component/DisscussionCard";
import Headers from "./Component/Headers";
import NavBar from "./Component/NavBar";



export default function Home() {

  return (
    
    <div className="flex flex-row">
   <div>
    <NavBar/>
    </div>
    <div className="relative">
      <Headers/>
      <DisscussionCard/>
    </div>
    </div>
    
  )}
    
  
