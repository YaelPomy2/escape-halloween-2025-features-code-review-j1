//import React
import { useState, useEffect } from "react";

//import styles
import "./storyline.css";

function StorylineLayoutContent({storyLine, i}) {
  // const [storyLineContent, setStoryLineContent] = useState(null);
  console.log(storyLine?.sections[i].animations[0].position,"storyLine2")
  return(<>
    <div className="StoryLineContent">
      <div>{storyLine?.sections[i].animations[0].position}</div>
      <div>{storyLine?.sections[i].animations[0].name}</div>
      <div>{storyLine?.sections[i].animations[0].durationInSeconds}</div>
    </div>
  </>)
}

function StorylineLayout({storyLine, i}) {
  return(<>
    <div className="StorylineLayoutBox">
      <div className="StorylineLayoutContainer">
        <section className="StorylineLayout">
          <div style={{fontSize:"27px"}}>{storyLine?.sections[i].name}</div>
          <div>{storyLine?.sections[i].description}</div>
        </section>
        <section className="StorylineLayout">
          <div>{storyLine?.sections[i].difficulty}</div>
          <div style={{display:"flex", flexFlow:"row nowrap", justifyContent:"center"}}>{storyLine?.sections[i].durationInMinutes}</div>
        </section>
      </div>
    <StorylineLayoutContent storyLine={storyLine} i={i}/>
  </div>
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
