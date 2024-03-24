

import DisscussionCard from "./Component/DisscussionCard";
import Headers from "./Component/Headers";
import NavBar from "./Component/NavBar";



export default function Home() {

  return (
    
    <div className="flex flex-col">
   <div>
    <NavBar/>
    </div>
    <div className=" ">
      <Headers/>
      <DisscussionCard/>
    </div>
    </div>
    
  )}
    
  
