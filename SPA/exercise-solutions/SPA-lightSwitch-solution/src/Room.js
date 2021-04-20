import React,{useState} from "react";

export default function Room() {
  const [isLightOn, setLight] = useState(true);

  const lightedness = isLightOn ? "lit" : "dark";

  const flipLight = () => {
    setLight(!isLightOn);
  };

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
}
