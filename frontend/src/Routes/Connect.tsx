import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface IFormData {
    username: string;
    password: string;
}

export interface IConnectProps {
    setUsername: Dispatch<SetStateAction<string>>;
    setJwt: Dispatch<SetStateAction<string>>;
}

export default function Connect({ setUsername, setJwt }: IConnectProps) {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    const [formData, setFormData] = useState<IFormData>({
        password: "",
        username: "",
    });

    const handleChange = (e: ChangeEvent) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                // @ts-ignore
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch("http://localhost:1221/login", {
            method: "POST",
            mode: "cors",
            body: new URLSearchParams({
                ...formData,
            }),
            credentials: "include",
            headers: new Headers({
                Authorization: "Basic dG90bzp0b3Rv",
                "Content-type": "application/json",
            }),
        })
            .then((data) => data.json())
            .then((json) => {
                console.log(json);
                setJwt(json.token);
            });
        setUsername(formData.username);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} />
            <br />
            <input type="password" name="password" onChange={handleChange} />
            <br />
            <button type="submit">Gooooo</button>
        </form>
    );
}
