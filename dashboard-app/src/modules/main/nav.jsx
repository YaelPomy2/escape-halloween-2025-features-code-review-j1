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


function DashboardMainNav() {

  const [tabs, setTabs] = useState(
    [
      {
        "id": 0,
        "label": "Écran principal",
      },
      {
        "id": 1,
        "label": "Écran indices",
      },
      {
        "id": 2,
        "label": "Écran input",
      },
      {
        "id": 3,
        "label": "Dashboard",
      }
    ]
  );
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section>
      <div className="AnimationTable">
        {tabs.map((tab, index) => {
          return (<>
            <AnimationTable tab={tab} index={index} activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          </>)
        })}

      </div>
    </section>
  )

}

export default DashboardMainNav