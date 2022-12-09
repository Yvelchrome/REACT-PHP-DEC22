import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/scss/App.scss";
import Post from "./components/Post/Post";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import NeedAuth from "./components/NeedAuth/NeedAuth";

function App() {
  const [username, setUsername] = useState<string>("");

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path={"/"} element={<Form setUsername={setUsername} />} />

          <Route
            path={"/home"}
            element={
              <NeedAuth username={username}>
                <Post />
              </NeedAuth>
            }
          />

          <Route path={"/login"} element={<Form setUsername={setUsername} />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
