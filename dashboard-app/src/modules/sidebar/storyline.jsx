//import React
import { useState, useEffect } from "react";

//import styles
import "./storyline.css";

function StorylineLayoutContent() {
  const [storyLineContent, setStoryLineContent] = useState(null);

  return(<>
  
  </>)
}

function StorylineLayout({storyLine}) {
  console.log(storyLine?.title)

  return(<>
    <div className="StorylineLayoutContainer">
      <section className="StorylineLayout StorylineLayout1">
        <div style={{fontSize:"27px"}}>Introduction</div>
        <div>Introduction à l'histoire de l'escape game</div>
      </section>
      <section className="StorylineLayout StorylineLayout2">
        <div>Histoire</div>
        <div>5 mins</div>
      </section>
    </div>  
  <StorylineLayoutContent/>
  </>)
}

function StorylineLayout1({storyLine}) {
    useEffect(()=> {
    console.log(storyLine, "storyLine OFF")
  }, [storyLine])

  return(<>
    <div className="StorylineLayoutContainer">
      <section className="StorylineLayout StorylineLayout1">
        <div style={{fontSize:"27px"}}>Introduction</div>
        <div>{storyLine}</div>
      </section>
      <section className="StorylineLayout StorylineLayout2">
        <div>Histoire</div>
        <div>5 mins</div>
      </section>
    </div>  
  {/*1*/}
    
  <StorylineLayoutContent/>
  </>)
}
//Principal
function DashboardSidebarStoryline() {
  const [storyLine, setStoryLine] = useState(null);

  useEffect(()=> {
    fetch("/mocks/storyline.json")
      .then(res => res.json())
      .then(data =>{
        setStoryLine(data)
        console.log("Storyline fetch succes");
      })
      .catch(error=> {
        console.log(error("Erreur : ", error))
      })
  }, [])

  return (<>
    <div className="StoryLineContainer">
      <div className="StoryLineTitle">
      Trame de l'histoire
      </div>
        <StorylineLayout storyLine={storyLine} />
    </div>
    <div > sadsda</div>
  </>)
}

export default DashboardSidebarStoryline
