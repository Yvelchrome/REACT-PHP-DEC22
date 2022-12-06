import React from "react";
import "./assets/css/scss/App.scss";
import Form from "./Form";

function App() {
  const toto = async () => {
    await fetch("http://localhost:5656/", {
      method: "POST",
      mode: "cors",
    });
  };
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
