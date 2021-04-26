import React, { useState } from "react";
import Card from "./Card";

export default function CardsForm() {
  const [cardsData, setCardsData] = useState([
    {
      cardTitle: "First card title",
      img:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000",
    },
    {
      cardTitle: "BMW",
      img:
        "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/einstiegsseite/1280x854_P90351044_highRes_the-new-bmw-8-series.jpg",
    },
  ]);
  return (
    <div className="CardsForm">
      <h2>Cards form</h2>
      <form>
        <h3>Form</h3>
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
