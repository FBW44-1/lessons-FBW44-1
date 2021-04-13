let title = "Card title";
let content =
  " Some quick example text to build on the card title and make up the bulk of the card's content.";

function Card() {
  return (
    <div class="card" style={{ width: "100%" }}>
      <img
        src="https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9087.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{content}</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
