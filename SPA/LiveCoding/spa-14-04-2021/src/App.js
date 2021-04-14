import "./App.css";
import {
  FunctionComponent,
  ClassComponent,
} from "./components/ClassVsFunction";
import MapInJsx from "./components/MapInJsx";

function App() {
  return (
    <div className="App">
      <h1>React app</h1>

      <FunctionComponent />
      <ClassComponent />
      <MapInJsx />
    </div>
  );
}

export default App;
