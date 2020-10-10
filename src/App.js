import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Weather from "./Weather";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/weather" component={Weather} />

        <Route path="/todolist" component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;
