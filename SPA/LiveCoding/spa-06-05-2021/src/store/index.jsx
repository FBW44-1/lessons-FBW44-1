import { useReducer } from "react";
import { DBUsers } from "../data/DBUsers";
import { Context } from "./Context";
import {
  EMAIL_VALUE,
  IS_VALID_PASSWORD,
  IS_VALID_EMAIL,
  PASSWORD_VALUE,
} from "./reduce/actions";
import { emailReducer, passwordReducer } from "./reduce/reducers";
const initEmail = { email: "", isValidEmail: false };
const initPassword = { password: "", isValidPassword: false };

// const isValid = validator('email') // true or false
// dispatchEmailState({type:EMAIL_VALUE, payload : value})
// dispatchEmailState({type: IS_VALID_EMAIL, payload: isValid})
const Provider = (props) => {
  const [emailState, dispatchEmailState] = useReducer(emailReducer, initEmail);
  const [passwordState, dispatchPasswordState] = useReducer(
    passwordReducer,
    initPassword
  );
  const { email, isValidEmail } = emailState;
  const { password, isValidPassword } = passwordState;

  //const [email, setEmail] = useState("");
  //const [isValidEmail, setIsValidEmail] = useState(false);

  //const [password, setPassword] = useState("");
  //const [isValidPassword, setIsValidPassword] = useState(false);

  const validator = (param) => {
    let isValid = false;

    // find the index of object with the current email:)
    let index = DBUsers.findIndex((user) => user.email === email);
    console.log("user ==> ", index);
    // you can use forEach or map
    DBUsers.forEach((user, i) => {
      if (index === i) {
        if (param === "email" && user.email === email) {
          isValid = true;
          //setIsValidEmail(true);
          dispatchEmailState({ type: IS_VALID_EMAIL, payload: true });
        }
        if (param === "password" && user.password === password) {
          isValid = true;
          // setIsValidPassword(true);
          dispatchPasswordState({ type: IS_VALID_PASSWORD, payload: true });
        }
      }
    });

    return isValid;
  };
  const onEmailHandler = (e) => {
    let value = e.target.value.trim().toLowerCase();
    dispatchEmailState({ type: EMAIL_VALUE, payload: value });
    // setEmail(value);
  };
  const onCheckEmailHandler = () => {
    const isValid = validator("email");
    if (isValid) return;
    // alert("The Email is not valid");
    //setIsValidEmail(isValid);
    dispatchEmailState({ type: IS_VALID_EMAIL, payload: isValid });
  };
  const onPasswordHandler = (e) => {
    let value = e.target.value.trim();
    // setPassword(value);
    dispatchPasswordState({ type: PASSWORD_VALUE, payload: value });
  };
  const onPasswordCheckHandler = () => {
    const isValid = validator("password");
    if (isValid) return;
    // alert("The Password is not valid");
    //setIsValidPassword(isValid);
    dispatchPasswordState({ type: IS_VALID_PASSWORD, payload: isValid });
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
        email,
        password,
        isValidEmail,
        isValidPassword,
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
