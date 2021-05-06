import "./App.css";
import { Switch, Route } from "react-router-dom";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sign">
          <Sign />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
