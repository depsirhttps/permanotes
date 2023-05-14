import "./App.css";
import Layout from "./Layout";
import NewNote from "./components/NewNote";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/permanotes" element={<Layout />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
