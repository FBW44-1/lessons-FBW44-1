function User(props) {
  console.log(props);
  return (
    <div>
      <h2>Welcome to {props.bootcampName}</h2>
      <p style={{ background: props.backColorStyle }}>User name: Pilar</p>
    </div>
  );
}

export default User;
