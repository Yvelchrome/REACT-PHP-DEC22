import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface formDataInterface {
    username: string;
    password: string;
}
const Form = () => {
    const mounted = useRef<Boolean>(false);
    const [formData, setFormData] = useState<formDataInterface>({
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
                "Content-type": "application/x-www-form-urlencoded",
            }),
        })
            .then((data) => data.text())
            .then((json) => console.log(json));
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit">register</button>
            </form>
        </>
    );
};

export default Form;
