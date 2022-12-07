import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState("login");

  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {(form === "login" && (
              <>
                <h2 className="title">Please Log In</h2>
                <form className="form--form">
                  <input type="text" placeholder="Username" name="username" />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  <button type="submit">LOGIN</button>
                </form>
                <button className="switch" onClick={() => setForm("register")}>
                  REGISTER INSTEAD ?
                </button>
              </>
            )) ||
              (form === "register" && (
                <>
                  <h2 className="title">Please Register</h2>
                  <form className="form--form">
                    <input type="text" placeholder="Username" name="username" />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <button type="submit">REGISTER</button>
                  </form>
                  <button className="switch" onClick={() => setForm("login")}>
                    LOGIN INSTEAD ?
                  </button>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
