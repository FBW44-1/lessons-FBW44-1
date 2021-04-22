import { useState, useEffect } from "react";
import axios from "axios";
import Users from "./users/Users";
const FunctionComponent = () => {
  const [users, setUsers] = useState(null);
  //const [users, setUsers] = useState([]);

  let baseUrl = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    /* const res = await axios.get(baseUrl);
    setUsers(res.data);*/
    axios.get(baseUrl).then((res) => {
      console.log("res from function component => ", res.data);
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Function Component</h1>
      {users &&
        users.map((userData) => <Users key={userData.id} user={userData} />)}
    </div>
  );
};

export default FunctionComponent;
