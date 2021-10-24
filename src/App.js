import './App.css';
import Routes from "./components/Routes";
import {HashRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes/>
      </Router>
    </div>
  );
}

export default App;
