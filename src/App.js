import React from "react";
import Manipulator from "./components-excel/manipulator";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./components-product-form/productParent";
import Login from "./components-init/login";

function App() {
  return (
    <Router>
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/manipulator">Manipulator</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
      <Switch>
        <Route exact path="/">
          <Product />
        </Route>
        <Route path="/manipulator">
          <Manipulator />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
