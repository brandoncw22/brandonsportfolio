/**
 * script/projectimage: Insert an image that belongs to a project.
 * @param {string} src - fully qualified URL to the image
 * @param {string} alt - alt text for accessibility
 * @param {string} desc - image caption/description
 * @param {number} projID - related project id (FK)
 */
// script/projectimage.js
const db = require('../db/db');

function projectImage(src, alt, desc, projID) {
    if (!src || !projID) {
        console.error("Usage: projectimage <src> <alt> <desc> <projID>");
        return;
    }

    db.run(
        `INSERT INTO project_images (src, alt, desc, projID) VALUES (?, ?, ?, ?)`,
        [src, alt, desc, projID],
        function (err) {
            if (err) {
                console.error("❌ Error inserting project image:", err.message);
            } else {
                console.log(`✅ Inserted image (id: ${this.lastID}) for project ${projID}`);
            }
        }
    );
}

module.exports = projectImage;
