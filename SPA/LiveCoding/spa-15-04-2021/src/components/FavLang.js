import React, { useState } from "react";

export default function FavLang() {
  const [languages, setLanguages] = useState(["PHP", "Javascript"]);
  const [input, setInput] = useState("");

  const onChangeLang = (e) => {
    //console.log(e.target.value);
    setInput(e.target.value);
  };

  const onAddLang = () => {
    const updateLang = [...languages, input];
    //console.log(updateLang.push(input));
    setLanguages(updateLang);
  };

  return (
    <div>
      <h1>FavLang</h1>
      <input type="text" onChange={onChangeLang} />
      <button onClick={onAddLang}>add</button>
      <h2>My favorite languages</h2>
      <ul>
        {languages.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
