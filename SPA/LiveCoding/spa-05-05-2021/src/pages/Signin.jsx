export default function Sign() {
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
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating Password">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <span className="ShowPassword">
              <i class="far fa-eye"></i>
            </span>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="button">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
    </div>
  );
}
