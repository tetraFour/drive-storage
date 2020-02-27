import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.sass";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routes } from "./assets/configs/route.config";
import ErrorSection from "./components/main-partials/error";
import rootReducer from "./store/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
