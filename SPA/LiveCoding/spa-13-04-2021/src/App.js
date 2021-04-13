import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function Footer() {
  return <footer className="footer">footer</footer>;
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
