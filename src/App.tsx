import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const toto = async () => {
        await fetch("http://localhost:5656/", {
            method: "POST",
            mode: "cors",
        });
    };
    return (
        <div className="App">
            <h1>bonjour</h1>
        </div>
    );
}

export default App;
