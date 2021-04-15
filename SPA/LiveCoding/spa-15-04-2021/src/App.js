import "./App.scss";
import FavLang from "./components/FavLang";
import Posts from "./components/Posts";
import User from "./components/User";
import UseStateComponent from "./components/UseStateComponent";

import postsData from "./posts.json";

function App() {
  //console.log(postsData);
  return (
    <div className="App">
      <UseStateComponent />
      <FavLang />
      <User name="Jon" email="jon@gmail.com" />
      <Posts posts={postsData} />
    </div>
  );
}

export default App;

//User({name:"Jon", email:"jon@gmail.com" })
