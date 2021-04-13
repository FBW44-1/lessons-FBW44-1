import "./App.css";

function Navbar() {
  return <nav className="navbar">navbar</nav>;
}

function Main() {
  return <div className="main">main</div>;
}

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
