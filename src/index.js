import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {routes} from "./assets/configs/route.config";
import reduxDevtoolConfig from "./assets/configs/reduxDevtool.config";
import rootReducer from "./store/reducers";

import App from "./App";
import "./assets/styles/index.sass";
import ErrorSection from "./components/main-partials/error";

const store = createStore(rootReducer, reduxDevtoolConfig());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          {routes.map(({ path, exact, component }, index) => (
            <Route
              key={index}
              path={path}
              exact={exact}
              component={component}
            />
          ))}
          <Route path="*" component={ErrorSection} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
