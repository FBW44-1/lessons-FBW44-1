import "./App.css";
import CardsForm from "./components/CardsForm";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <div className="Container">
      <h1>Forms and Events</h1>
      <SimpleForm />
      <CardsForm />
    </div>
  );
}

export default App;
