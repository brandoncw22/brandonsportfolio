
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//Import pages
import Home from "./pages/Home";
import githubicon from "./images/github.png";
import linkedin_icon from "./images/linkedin.png"
import emailicon from "./images/email.png";



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
          <div>


          </div>
          <div className="socialicons">
            <a href="https://github.com/brandoncw22">
              <img className="icon github" src={githubicon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/brandon-wendell">
              <img className="icon linkedin" src={linkedin_icon} alt="linkedin icon" />
            </a>
            <a href="mailto:brandon.c.wendell@gmail.com">
              <img className="icon email" src={emailicon} alt="email icon" />
            </a>
          </div>
          <div>

          </div>
          
      </div>
    </Router>
  );
}

export default App;
