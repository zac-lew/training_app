import React from "react";
import "./App.css";
import LoginMain from "./LoginScreen/LoginMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import CreatePlanScreen from "./CreatePlanScreen/CreatePlanScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/create">
            <CreatePlanScreen />
          </Route>
          <Route path="/">
            <LoginMain />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
