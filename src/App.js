import React from "react";
import Movies from "./Movies";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' render={(routerProps) => <Movies {...routerProps} />} />
      </Switch>
    </div>
  );
}

export default App;
