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
  onSignHandler: (e) => {},
  onEmailHandler: (e) => {},
  onCheckEmailHandler: (e) => {},
  onPasswordHandler: (e) => {},
  onPasswordCheckHandler: (e) => {},
});

const Provider = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isValidEmail, setIsValidEmail] = useState();
  const [isValidPassword, setIsValidPassword] = useState();

  const onEmailHandler = (e) => {
    let value = e.target.value.trim().toLowerCase();
    setEmail(value);
  };
  const onCheckEmailHandler = (e) => {
    //console.log("onCheckEmailHandler ");
  };
  const onPasswordHandler = (e) => {
    let value = e.target.value.trim();
    setPassword(value);
  };
  const onPasswordCheckHandler = (e) => {
    //console.log("onPasswordCheckHandler ");
  };
  const onSignHandler = (e) => {};
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
