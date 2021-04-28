import "./App.css";
//components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
//pages
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import PostsPage from "./pages/Posts";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main className="Pages">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
          <Route exact path="/posts">
            <PostsPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
