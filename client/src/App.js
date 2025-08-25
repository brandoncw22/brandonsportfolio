
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//Import pages
import Home from "./pages/Home";
import githubicon from "./images/github.png";




function App() {
  return (
    <Router>
      <header>
        <title>Brandon Wendell</title>
      </header>
      <div id="background-wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
      <div id="footer">
          <a href="https://github.com/brandoncw22">
            <img className="icon" src={githubicon} alt="Github Icon" />
          </a>
          
      </div>
    </Router>
  );
}

export default App;
