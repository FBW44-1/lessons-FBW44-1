const AddProductForm = () => {
  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
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
          placeholder="Please insert the details"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default AddProductForm;
