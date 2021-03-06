const Card = (props) => {
  const { cardObject } = props;
  return (
    <div className="Card">
      <p>{cardObject.cardTitle}</p>
      <img
        style={{ width: "100%" }}
        src={cardObject.img}
        alt={cardObject.cardTitle}
      />
    </div>
  );
};

export default Card;
