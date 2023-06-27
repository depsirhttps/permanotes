import React from 'react';
import logo from './logo.svg';
import './App.css';
import SomethingNew from './pages/SomethingNew/SomethingNew'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PastProjects from './PastProjects';

function App() {

  // const HomePage = () => {
  //   return <div>
  //     <a href="/pastprojects">go to past projects</a>
  //   </div>
  // }

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<SomethingNew/>}/>
            <Route path="/pastprojects" element={<PastProjects/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
