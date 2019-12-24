import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import {Provider} from 'react-redux';

import './config/ReactotronConfig';

import Header from './components/Header';
import StyleGlobal from "./styles/global";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <StyleGlobal />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
