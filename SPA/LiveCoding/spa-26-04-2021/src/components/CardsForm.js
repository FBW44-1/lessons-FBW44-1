import React, { useState } from "react";
import Card from "./Card";
import cardsDataArray from "./data";

export default function CardsForm() {
  const [cardTitle, setCardTitle] = useState("");
  const [cardImg, setCardImg] = useState("");
  const [cardsData, setCardsData] = useState(cardsDataArray);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newCardData = {
      cardTitle: cardTitle,
      img: cardImg,
    };

    const CopyCardsDataAndUpdate = [newCardData, ...cardsData];
    setCardsData(CopyCardsDataAndUpdate);
    setCardTitle("");
    setCardImg("");
    //console.log("Data submit => ", CopyCardsDataAndUpdate);
  };

  const onCardTitle = (e) => {
    console.log(e.target.value);
    setCardTitle(e.target.value);
  };

  const onCardImg = (e) => {
    setCardImg(e.target.value);
  };
  return (
    <div className="CardsForm">
      <h2>Cards form</h2>
      <form onSubmit={onSubmitHandler}>
        <h3>Form</h3>
        <div>
          <label htmlFor="cardTitle">Card title: </label>
          <input
            value={cardTitle}
            onChange={onCardTitle}
            type="text"
            id="cardTitle"
          />
        </div>
        <div>
          <label htmlFor="cardImg"> Card img: </label>
          <input
            onChange={onCardImg}
            value={cardImg}
            type="text"
            id="cardImg"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Cards</h3>
        {cardsData.map((cardItem, indexItem) => (
          <Card key={indexItem} cardObject={cardItem} />
        ))}
      </div>
    </div>
  );
}
