import { useState, useEffect } from "react";
import axios from "axios";
import "./styling/Skills.css";

function Skills () {
    const [skills, setSkills] = useState([{}]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/skills/loadskills`)
            .then((res) => {
            if (res.data && Array.isArray(res.data)) {
                setSkills(res.data);
            } else {
                console.error("Unexpected response structure:", res.data);
            }
            })
            .catch((err) => console.error("Failed to load skills:", err));
    }, []);
    return(
        <div id="skills-box">
            {skills.map((skill) => (
                <div className="skill">
                    <img className={`skill-icon ` + skill.skill} src={`${process.env.REACT_APP_API_URL}${skill.imageSrc}`} alt={skill.imgAlt} />
                    <div className="skill-overlay">
                        <span className="skill-title">{skill.skill}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Skills;