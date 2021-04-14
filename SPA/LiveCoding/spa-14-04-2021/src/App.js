import "./App.css";

import {
  FunctionComponent,
  ClassComponent,
} from "./components/ClassVsFunction";

function App() {
  return (
    <div className="App">
      <h1>React app</h1>

      <FunctionComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
