import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import Header from './components/Header';

import StyleGlobal from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <StyleGlobal />
    </BrowserRouter>
  );
}

export default App;
