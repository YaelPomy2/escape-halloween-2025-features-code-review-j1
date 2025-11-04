//import React
import { useState, useEffect } from "react";

//import styles
import "./storyline.css";

function StorylineLayoutContent({storyLine, i}) {
  // const [storyLineContent, setStoryLineContent] = useState(null);

  return(<>
    <div>
      <div>{storyLine?.sections[i].animations.position}</div>
      <div>{storyLine?.sections[i].animations.name}</div>
      <div>{storyLine?.sections[i].animations.durationInSeconds}</div>

    </div>
  </>)
}

function StorylineLayout({storyLine, i}) {
  return(<>
    <div className="StorylineLayoutContainer">
      <section className="StorylineLayout StorylineLayout1">
        <div style={{fontSize:"27px"}}>{storyLine?.sections[i].name}</div>
        <div>{storyLine?.sections[i].description}</div>
      </section>
      <section className="StorylineLayout StorylineLayout2">
        <div>{storyLine?.sections[i].difficulty}</div>
      </section>
    </div>  
  <StorylineLayoutContent storyLine={storyLine} i={i}/>
  </>)
}

//Principal
function DashboardSidebarStoryline({activeTab, setActiveTab}) {
  const [storyLine, setStoryLine] = useState(null);
  let i = null;

  useEffect(()=> {
    fetch("/mocks/storyline.json")
      .then(res => res.json())
      .then(data =>{
        setStoryLine(data)
        console.log("Storyline fetch succes");
      })
      .catch(error=> {
        console.log(error("Catch Error : ", error))
      })
  }, [])

  return (<>
    <div className="StoryLineContainer">
      <div className="StoryLineTitle">
      Trame de l'histoire
      </div>
        <StorylineLayout storyLine={storyLine} i={0}/>
    </div>
  </>)
}

export default DashboardSidebarStoryline
