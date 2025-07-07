
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
//Import components
import Navbar from "./components/Navbar";
import logo from "./images/logo.png";


function App() {
  return (
    <Router>
      <header>
        <title>Brandon Wendell</title>
      </header>
      <div id="background-wrapper">
        <nav>
          <div id="header">
            <img id="logo-image" src={logo} alt="Logo"/>
            <h1 id="site-title">Brandon Wendell</h1>
            <Navbar />
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <div id="footer">
          <h1>Hi</h1>
      </div>
    </Router>
  );
}

export default App;
