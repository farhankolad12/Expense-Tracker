import "./App.css";
import { BrowserRouter } from "react-router-dom";
import GlobalTransactions from "./contexts/GlobalTransactions";
import Routing from "./components/Routing";

function App() {
  return (
    <div className="app">
      <GlobalTransactions>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </GlobalTransactions>
    </div>
  );
}

export default App;
