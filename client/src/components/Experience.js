import { useState, useEffect } from 'react';
import axios from "axios";
import "./styling/Experience.css";

//Shows a list of experience cards
function Experience () {
    const [experience, setExperience] = useState([{}]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/experience/load_experience")
            .then((res) => {
            if (res.data && Array.isArray(res.data)) {
                setExperience(res.data);
            } else {
                console.error("Unexpected response structure:", res.data);
            }
            })
            .catch((err) => console.error("Failed to load experience:", err));
    }, []);

    return (
        <div id="experience-cards">
            {experience.map((experience, index) => (
                <>
                <div className="card" id={`experience-id-${index}`}>
                    <img className={`company-${experience.jobCompany}`} src={experience.imageSrc} alt={experience.imageAlt} />
                    <div className="card-content">
                        <h1 className="experience-heading">{experience.jobTitle} – {experience.jobCompany} – {experience.beginDate} to {experience.endDate}</h1>
                        <p>{experience.desc}.</p>
                    </div>
                </div>
                
                </>
            ))}
        </div>
        
    );
}

export default Experience;