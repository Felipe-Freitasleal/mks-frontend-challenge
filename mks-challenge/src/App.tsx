import "./App.css";
import { MksContext } from "./contexts/MksContext";
import { Router } from "./Routes/Router";

function App() {

  const context = {

  }
  
  return (
    <div className="App">
      <MksContext.Provider value={context}>
        <Router />
      </MksContext.Provider>
    </div>
  );
}

export default App;
