import { useState } from "react";

function AnimationTable({ tab, tabs, activeTab, index, setActiveTab }) {
  function handleClick(e) {
    e.preventDefault();
    setActiveTab(tabs[index])
  }
  return (<>
    <div onClick={handleClick} className={(tab.id === activeTab.id) ? "AnimationTableActive" : "AnimationTableInactive"}> {tab.label} </div>
  </>);
}


function DashboardMainNav({tabs, activeTab,setActiveTab}) {
  
  return (
    <section className="AnimationTable">
        {tabs.map((tab, index) => {
          return (<>
            <AnimationTable tab={tab} index={index} activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          </>)
        })}
    </section>
  )

}

export default DashboardMainNav