import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import App from "../App";

const Providers = () => {
  return <Provider store={store}>
      <App/>
    </Provider>;
};

export default Providers;
