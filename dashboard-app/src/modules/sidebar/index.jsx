// import React
import { useState } from "react"
// import components
import DashboardSidebarStoryline from "./storyline"

function DashboardSidebar({activeTab, setActiveTab}) {
const  [isHovered, setisHovered] = useState(null)
  return (
    <aside className="StoryLineContainer" onMouseEnter={()=> setisHovered(true)} onMouseLeave={()=> setisHovered(false)}>
        <DashboardSidebarStoryline activeTab={activeTab} setActiveTab={setActiveTab}/>
    </aside>
  )
}

export default DashboardSidebar