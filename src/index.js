import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Rexy from "./Rexy";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Rexy />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

