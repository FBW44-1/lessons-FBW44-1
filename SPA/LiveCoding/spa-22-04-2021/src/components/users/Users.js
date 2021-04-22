const Users = (props) => (
  <div style={{ border: "1px solid blue", marginBottom: "10px" }}>
    <h4>User Name: {props.user.username}</h4>
    <p>Email: {props.user.email}</p>
    <p>
      Address:{" "}
      {props.user.address.street +
        " " +
        props.user.address.suite +
        " " +
        props.user.address.zipcode +
        " " +
        props.user.address.city}
    </p>
  </div>
);

export default Users;
