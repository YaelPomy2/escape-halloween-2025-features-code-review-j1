import DashboardSidebarStoryline from "./storyline"

function DashboardSidebar({activeTab, setActiveTab}) {

  return (
    <aside style={{width:"30%"}}>
        <DashboardSidebarStoryline activeTab={activeTab} setActiveTab={setActiveTab}/>
    </aside>
  )
}

export default DashboardSidebar