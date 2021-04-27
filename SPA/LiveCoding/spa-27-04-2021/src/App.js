import "./App.css";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import HomePage from "./Pages/Home";
import PostsPage from "./Pages/Posts";
import NotFoundPage from "./Pages/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
