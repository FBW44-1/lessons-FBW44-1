function User(props) {
  return (
    <div>
      <h2>Welcome to {props.bootcamp}</h2>
      <div style={{ background: props.backColor }}>User name: Pilar</div>
    </div>
  );
}

export default User;
