import { useState, useEffect } from 'react';
import "./styling/Education.css"

//Shows a list of Education
function Education () { 

    return (
        <div id="education-cards">
            <div className="education-card">
                <div className="education-header midview">
                    <h1 className="education-institute">Midview High School</h1>
                </div>
                <div className="education-body">
                    <h2>High School Diploma</h2>
                    <h3>Graduated May of 2022</h3>
                    <h3>3.7 GPA</h3>
                </div>
                
            </div>
            <div className="education-card">
                <div className="education-header csu">
                    <h1 className="education-institute">Cleveland State University</h1>
                </div>
                <div className="education-body">
                    <h2>Bachelors of Computer Science</h2>
                    <h3>Expected graduation May of 2026</h3>
                    <h3>3.2 GPA</h3>
                </div>
            </div>
        </div>
        
    );
}

export default Education;