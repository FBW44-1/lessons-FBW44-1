const Card = (props) => {
  const { product } = props;
  return (
    <div className="card">
      <img src={product.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.details}</p>
        <a href="#" className="btn btn-primary">
          Add
        </a>
      </div>
    </div>
  );
};

export default Card;
