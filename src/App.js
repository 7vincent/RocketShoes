import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import StyleGlobal from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <StyleGlobal />
    </BrowserRouter>
  );
}

export default App;
