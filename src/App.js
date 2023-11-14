import "./App.css";

import { Debounce } from "./components/Debounce";
import { Throttle } from "./components/Throttle";

function App() {
  return (
    <div className="box-border h-screen">
      <Debounce />
      <Throttle />
    </div>
  );
}

export default App;
