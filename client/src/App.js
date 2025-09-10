/**
 * App: Root React component for the portfolio site.
 * - Configures React Router and renders the main `Home` page
 * - Provides a global footer with contact details and social icons
 * - Wraps site content with a background/layout container
 */
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
            {/* Route configuration for SPA */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
      <div id="footer">
        <div className="footer-content">
          <h2 className="footer-heading">Contact Me</h2>
          <h3>Email: brandon.c.wendell@gmail.com</h3>
          <h3>Phone: (440) 925-1269</h3>
        </div>

        <div className="socialicons">
          {/* External profile links */}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/brandoncw22">
            <img className="icon github" src={githubicon} alt="Github Icon" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brandon-wendell">
            <img className="icon linkedin" src={linkedin_icon} alt="linkedin icon" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:brandon.c.wendell@gmail.com">
            <img className="icon email" src={emailicon} alt="email icon" />
          </a>
        </div>
      </div>

    </Router>
  );
}

export default App;
