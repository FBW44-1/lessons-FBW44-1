import { createContext } from "react";

export const Context = createContext({
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
