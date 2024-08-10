import "./App.css";

import Landingpage from "./components/Landingpage";
import Research from "./components/Research";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
}

export default App;
