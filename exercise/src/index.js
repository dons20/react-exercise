import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './app';
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import UserList from "./routes/UserList";
import UserDetails from "./routes/UserDetail";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/users/:id" component={UserDetails} />
        </Switch>
      </div>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
