import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css"; // Add this line to
// import { BrowserRouter as Router Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
