import "./App.scss";
import FavLang from "./components/FavLang";
import User from "./components/User";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div className="App">
      <UseStateComponent />
      <FavLang />
      <User name="Jon" email="jon@gmail.com" />
    </div>
  );
}

export default App;

//User({name:"Jon", email:"jon@gmail.com" })
