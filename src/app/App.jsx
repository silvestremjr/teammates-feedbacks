import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Teammates from './pages/Teammates';
import PersonDetails from './pages/PersonDetails';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <div className="nav-item mr-3">
            <Link to={"/teammates"}>Teammates</Link>
          </div>
        </ul>
      </nav>
      <section className="container mt-3">
        <Switch>
          <Route exact path={["/", "/teammates"]} component={Teammates} />
          <Route exact path="/teammates/:id" component={PersonDetails} />
        </Switch>
      </section>
    </Router>
  );
};

export default App;
