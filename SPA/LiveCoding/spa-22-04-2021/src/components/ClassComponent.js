import { Component } from "react";
import Users from "./users/Users";
import axios from "axios";

/*
const usersData = [
  {
    name: "Alex",
    email: "alex@gmail.com",
  },
  {
    name: "Pilar",
    email: "pilar@gamil.com",
  },
];*/

class ClassComponent extends Component {
  baseURL = "https://jsonplaceholder.typicode.com/users";
  state = {
    users: null,
  };
  getUsers = async () => {
    const res = await axios.get(this.baseURL);
    this.setState({ ...this.state, users: res.data });
    console.log(res.data);
  };
  componentDidMount() {
    // this.state.users = [..] wrong in react
    // this.setState({ users: null, users: usersData })
    // console.log(this.getUsers());
    this.getUsers();
    // this.setState({ ...this.state, users: usersData });
  }
  renderUsers = () =>
    this.state.users.map((user) => <Users key={user.id} user={user} />);
  render() {
    return (
      <div>
        <h1>Class component</h1>
        {this.state.users ? this.renderUsers() : <p> Users not found</p>}
      </div>
    );
  }
}

export default ClassComponent;
