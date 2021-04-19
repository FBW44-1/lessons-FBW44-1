import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AddProductForm = (props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");

  const onSubmit = () => {
    const prod = {
      id: uuidv4(),
      title: title,
      url: url,
      details: details,
    };

    const cloneAndUpdateProducts = [...props.productsData, prod];

    props.setProductsData(cloneAndUpdateProducts);

    console.log("on submit ==> ", prod);
  };

  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Please insert the title"
        />
      </div>

      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          URL
        </label>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Please insert the url"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Details
        </label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Please insert the details"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button onClick={onSubmit} type="button" class="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default AddProductForm;
