import "./App.css";
import {
  FunctionComponent,
  ClassComponent,
} from "./components/ClassVsFunction";
import MapInJsx from "./components/MapInJsx";
import NestMapInJsx from "./components/NestMapInJsx";

function App() {
  return (
    <div className="App">
      <h1>React app</h1>

      <FunctionComponent />
      <ClassComponent />
      <MapInJsx />
      <NestMapInJsx />
    </div>
  );
}

export default App;
