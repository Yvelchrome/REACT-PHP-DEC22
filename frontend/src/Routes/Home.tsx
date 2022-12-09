import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export interface IPostProps {
    setPost: Dispatch<SetStateAction<string>>;
}

export interface IChildrenProps {
    jwt: string;
    post: string;
    setPost: Dispatch<SetStateAction<string>>;
}
export default function Home({ jwt, post, setPost }: IChildrenProps) {
    useEffect(() => {
        fetch("http://localhost:1221", {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: new Headers({
                Authorization: "Bearer " + jwt,
            }),
        })
            .then((data) => data.json())
            .then((json) => {
                console.log(json);
                setPost(json.posts);
            });
    }, [jwt]);
    return (
        <>
            <h2 style={{ background: "gray" }}>Coucou la home</h2>
            {post && <h1>{post}</h1>}
        </>
    );
}
