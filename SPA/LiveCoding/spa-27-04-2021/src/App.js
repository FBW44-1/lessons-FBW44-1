import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import HomePage from "./Pages/Home";
import PostsPage from "./Pages/Posts";
import NotFoundPage from "./Pages/NotFound";

function App() {
  return (
    <div>
      <header>
        <nav className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/posts">Posts</Link>
        </nav>
      </header>
      <main className="Pages">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact">
            <ContactPage name="test name prop" />
          </Route>
          <Route exact path="/posts">
            <PostsPage />
          </Route>
          <Route exact component={NotFoundPage} />
        </Switch>
      </main>
      <footer className="Footer">Footer</footer>
    </div>
  );
}

export default App;
