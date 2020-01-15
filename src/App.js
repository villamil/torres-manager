import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./scenes/Login";
import Home from "./scenes/Home";
import Units from "./scenes/Units";
import UnitDetails from "./scenes/UnitDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Layout title="Inicio">
            <Home />
          </Layout>
        </Route>
        <Route path="/units" exact>
          <Layout title="Departamentos">
            <Units />
          </Layout>
        </Route>
        <Route path="/units/:id" exact>
          <Layout title="Departamentos">
            <UnitDetails />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
