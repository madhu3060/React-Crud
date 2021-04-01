import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateEmployees from "./Components/CreateEmployees";
import HeaderComponent from "./Components/HeaderComponent";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";

const App = () => {
  return (
    <Fragment>
      <Router>
        <header>
          <HeaderComponent />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-employee" exact component={CreateEmployees} />
            <Route path="/pagenotfound" component={PageNotFound} />
          </Switch>
        </main>
      </Router>
    </Fragment>
  );
};

export default App;
