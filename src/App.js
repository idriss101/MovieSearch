import React from "react";
import "./App.css";
import Movies from "./Movies";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <Movies />} />
      </Switch>
    </div>
  );
}

export default App;
