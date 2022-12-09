// Not used in the project as is

// import { useState } from "react";
export default function Login() {
  // const [form, setForm] = useState("login");

  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title">Please Log In</h2>
            <form className="form--form">
              <input type="text" placeholder="Username" name="username" />
              <input type="password" placeholder="Password" name="password" />
              <button type="submit">LOGIN</button>
            </form>
            <button
              className="switch" /* onClick={() => setForm("register")} */
            >
              REGISTER INSTEAD ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
