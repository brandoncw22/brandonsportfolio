import { useState, useEffect } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./styling/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/project/loadprojects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <div id="projects-box">
      {projects.map((project) => (
        <Popup
          key={project.id}
          trigger={
            <div
              className="project-card"
              style={{
                backgroundImage:
                  project.images.length > 0
                    ? `url(http://localhost:4000${project.images[0].src})`
                    : "none",
              }}
            >
              <div className="overlay">
                <h2 className="project-title">{project.title}</h2>
              </div>
            </div>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal-content">
              <h2>{project.title}</h2>
              <p>
                <strong>Status:</strong> {project.STATUS}
              </p>
              <p>
                <strong>Tech Stack:</strong> {project.techstack}
              </p>
              <p>
                <strong>Github:</strong> <a href={project.github}>{project.github}</a>
              </p>
              <p>{project.desc}</p>

              <div className="slideshow">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={`http://localhost:4000${img.src}`}
                    alt={img.alt}
                    className="slideshow-img"
                  />
                ))}
              </div>

              <button onClick={close} className="close-btn">
                Close
              </button>
            </div>
          )}
        </Popup>
      ))}
    </div>
  );
}

export default Projects;
