import { useState, useEffect } from "react";
import image from "/public/mocks/images/sequences/image.png";
import "./style.css";

function SequenceItem({ sequence, setActiveSequence }) {
  // Fonction du click sur la séquence

  function handleClick(e) {
    e.preventDefault();
    setActiveSequence(sequence);
  }

  return (<>
    <div className="AnimationSequence" onClick={handleClick}>
      <div>
        <img alt="aperçu de séquence" src={image} style={{ height: "100%", width: "150px",paddingLeft:"30%" }} />
      </div>

      <div className="AnimationSequenceInfo sequence">
        <div className="AnimationSequenceInfoTitle">
          {sequence.title}
        </div>
        <div className="AnimationSequenceInfoDescr">
          {sequence.description}
        </div>
      </div>

      <div className="sequence">
        {sequence.order}
      </div>

      <div className="sequence" style={{ paddingLeft: "2%" }}>
        {sequence.duration}
      </div>
    </div>
    <hr style={{ border: "#181818ff 1px solid" }} />
  </>)
}

function DashboardMainAnimationsTab() {
  const [sequences, setSequences] = useState(null);

  useEffect(() => {
    fetch("/mocks/sequence_pincipal.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetch succes, update: ", data);
        setSequences(data)
      })
      .catch(error => {
        console.log("Catch Error : ", error);
      })
  }, []);

  return (
    <>
      <div className="AnimationTitles">
        <p>Séquences :</p>
        <p>Position</p>
        <p>Durée</p>
      </div>
      <div className="AnimationList">
        {(sequences) ? <>
          {sequences.map((sequenceItem) => <SequenceItem sequence={sequenceItem} /*setActiveSequence={setActiveSequence}*/ />)}
        </> : <>Loading sequences</>}
      </div>
    </>
  )
}

export default DashboardMainAnimationsTab
