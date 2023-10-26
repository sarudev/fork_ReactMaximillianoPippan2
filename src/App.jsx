import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css";

function App() {
  return (
  <>
  <NavBar />
  <ItemListContainer greeting="¿También guardas hilos adentro de una lata de Royal Dansk?" />
  </>
  );
}

export default App
