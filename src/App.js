import './App.css';
import Routes from "./components/Routes";
import {HashRouter as Router} from "react-router-dom";

function App() {
  return (
    // USES NODE 16.13.2
    <div className="App">
      <Router>
          <Routes/>
      </Router>
    </div>
  );
}

export default App;
