const express = require("express");
const router = express.Router();
const db = require("../db/db");

// Load projects with their images
router.get("/loadprojects", (req, res) => {
    const sqlProjects = `SELECT * FROM project`;
    const sqlImages = `SELECT * FROM project_images`;

    db.all(sqlProjects, [], (err, projects) => {
        if (err) {
            console.error("❌ Error fetching projects:", err.message);
            return res.status(500).json({ error: "Failed to load projects" });
        }

        db.all(sqlImages, [], (err, images) => {
            if (err) {
                console.error("❌ Error fetching project images:", err.message);
                return res.status(500).json({ error: "Failed to load project images" });
            }

            // Attach images to the right project
            const projectsWithImages = projects.map((proj) => {
                return {
                    ...proj,
                    images: images.filter((img) => img.projID === proj.id)
                };
            });

            res.json(projectsWithImages);
        });
    });
});

module.exports = router;
