

import MainSector from "./Component/MainSector";
import NavBar from "./Component/NavBar";



export default function Home() {

  return (
    
    <div className="flex flex-row">
    <div className="min-h-screen flex absolute -z-1 lg:relative -z-1 flex-row">
      <NavBar />
    </div>
    <MainSector/>
  </div>
  )}
    
  
