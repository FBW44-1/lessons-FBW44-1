import { createContext, useState } from "react";

const DBUsers = [
  {
    email: "max@gmail.com",
    password: "1234",
  },
  {
    email: "tommy@gmail.com",
    password: "123a",
  },
];

const Context = createContext({
  email: "",
  isValidEmail: false,
  password: "",
  isValidPassword: false,
  onSignHandler: () => {},
  onEmailHandler: (e) => {},
  onCheckEmailHandler: () => {},
  onPasswordHandler: (e) => {},
  onPasswordCheckHandler: () => {},
});

const Provider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const validator = (param) => {
    let isValid = false;

    // find the index of object with the current email:)
    let index = DBUsers.findIndex((user) => user.email === email);
    console.log("user ==> ", index);
    // you can use forEach or map
    DBUsers.forEach((user, i) => {
      if (index == i) {
        if (param === "email" && user.email === email) {
          isValid = true;
          setIsValidEmail(true);
        }
        if (param === "password" && user.password === password) {
          isValid = true;
          setIsValidPassword(true);
        }
      }
    });

    return isValid;
  };
  const onEmailHandler = (e) => {
    let value = e.target.value.trim().toLowerCase();
    setEmail(value);
  };
  const onCheckEmailHandler = () => {
    const isValid = validator("email");
    if (isValid) return;
    alert("The Email is not valid");
    setIsValidEmail(false);
  };
  const onPasswordHandler = (e) => {
    let value = e.target.value.trim();
    setPassword(value);
  };
  const onPasswordCheckHandler = () => {
    const isValid = validator("password");
    if (isValid) return;
    // alert("The Password is not valid");
    setIsValidPassword(false);
  };
  const onSignHandler = () => {
    if (!isValidEmail) {
      alert("The Email is not valid");
    } else if (!isValidPassword) {
      alert("The Password is not valid");
    } else {
      localStorage.setItem("token", true);
      window.location.reload();
    }
  };
  return (
    <Context.Provider
      value={{
        onSignHandler,
        onEmailHandler,
        onCheckEmailHandler,
        onPasswordHandler,
        onPasswordCheckHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
