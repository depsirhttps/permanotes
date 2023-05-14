import "./App.css";
import NewNote from "./components/NewNote";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router basename={'/permanotes'}>
      <NewNote/>
    </Router>
  );
}

export default App;
