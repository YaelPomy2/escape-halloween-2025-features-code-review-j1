import DashboardMainNav from "./nav"
import DashboardMainActiveTab from "./active-tab"
import DashboardMainAnimationsTab from "./tabs/animations"

import "./main.css"
function DashboardMain() {

  return (
    <main className="MainElementTab">
        <DashboardMainNav />
        <DashboardMainActiveTab />
        <DashboardMainAnimationsTab />
    </main>
  )
}

export default DashboardMain
