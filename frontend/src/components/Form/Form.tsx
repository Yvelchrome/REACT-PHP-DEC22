import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
  FormEvent,
} from "react";
import { useNavigate } from "react-router-dom";

export interface IFormData {
  username: string;
  password: string;
}

export interface IConnectProps {
  setUsername: Dispatch<SetStateAction<string>>;
}

export default function Form({ setUsername }: IConnectProps) {
  const navigate = useNavigate();
  const mounted = useRef<Boolean>(false);

  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (!mounted.current) {
      fetch("http://localhost:5656")
        .then((data) => data.json())
        .then((json) => console.log(json));
    }
    mounted.current = true;
  }, []);

  const handleChange = (e: ChangeEvent) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        //@ts-ignore
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:5656", {
      method: "POST",
      mode: "cors",
      body: new URLSearchParams({
        ...formData,
      }),
      credentials: "include",
      headers: new Headers({
        Authorization: "Basic dG90bzp0b3Rv",
        "Content-type": "application/x-www-form-urlencoded",
      }),
    })
      .then((data) => data.text())
      .then((json) => console.log(json));
    setUsername(formData.username);
    navigate("/");
  };

  const [form, setForm] = useState("login");

  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {(form === "login" && (
              <>
                <h2 className="title">Please Log In</h2>
                <form className="form--form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
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
                  <form className="form--form" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
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
