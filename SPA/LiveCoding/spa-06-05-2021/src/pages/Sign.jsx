import { useState, useEffect, useContext } from "react";
import { Context } from "../store";

export default function Sign() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    onSignHandler,
    onEmailHandler,
    onCheckEmailHandler,
    onPasswordHandler,
    onPasswordCheckHandler,
    isValidEmail,
    isValidPassword,
    email,
    password,
  } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.replace("/");
    }
  }, []);

  return (
    <div className="text-center">
      <main className="form-signin">
        <form>
          <img
            className="mb-4"
            src="https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              onChange={onEmailHandler}
              onBlur={onCheckEmailHandler}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
            {!isValidEmail && email && (
              <div class="alert alert-danger" role="alert">
                The email is not valid
              </div>
            )}
          </div>
          <div className="form-floating Password">
            <input
              onChange={onPasswordHandler}
              onBlur={onPasswordCheckHandler}
              type={isVisible ? "text" : "password"}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <span className="ShowPassword">
              <i
                onClick={() => setIsVisible(!isVisible)}
                className="far fa-eye"
              ></i>
            </span>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {password && !isValidPassword && (
            <div class="alert alert-danger" role="alert">
              The password is not valid
            </div>
          )}
          <button
            onClick={onSignHandler}
            className="w-100 btn btn-lg btn-primary"
            type="button"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
    </div>
  );
}
