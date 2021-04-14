import "./App.css";
import {
  FunctionComponent,
  ClassComponent,
} from "./components/ClassVsFunction";
import MapInJsx from "./components/MapInJsx";
import NestMapInJsx from "./components/NestMapInJsx";

import { FunComponent, CComponent } from "./components/ClassVsFunctionPart2";

function App() {
  return (
    <div className="App">
      <h1>React app</h1>

      <FunctionComponent />
      <ClassComponent />
      <MapInJsx />
      <NestMapInJsx />
      <hr />
      <FunComponent />
      <hr />
      <CComponent />
    </div>
  );
}

export default App;
