import React, { useState } from "react";

export default function FavLang() {
  const [languages, setLanguages] = useState(["PHP", "Javascript"]);
  const [input, setInput] = useState("");

  const onChangeLang = (e) => {
    //console.log(e.target.value);
    setInput(e.target.value);
  };

  const onAddLang = () => {
    //console.log(!!input);

    if (input.trim()) {
      const updateLang = [...languages, input];
      //console.log(updateLang.push(input));
      setLanguages(updateLang);
      setInput("");
    }
  };

  return (
    <div>
      <h1>FavLang</h1>
      <input value={input} type="text" onChange={onChangeLang} />
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
