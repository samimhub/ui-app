

import DisscussionCard from "./Component/DisscussionCard";
import Headers from "./Component/Headers";
import NavBar from "./Component/NavBar";



export default function Home() {

  return (
    
  <div className="flex flex-row relative">
   <div className="min-h-screen flex absolute ">
    <NavBar/>
    </div>
    <div className="relative">
      <Headers/>
      <DisscussionCard/>
    </div>
    </div>
    
  )}
    
  
