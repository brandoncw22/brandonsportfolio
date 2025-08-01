
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
//Import pages
import Home from "./pages/Home";




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
          <h1>Hi</h1>
      </div>
    </Router>
  );
}

export default App;
