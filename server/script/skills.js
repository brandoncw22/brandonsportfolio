const db = require('../db/db');

function skills (skill, src, alt){
    const skillEntry = {
        skill,
        src: `http://localhost:4000/storage/skills/${src}`,
        alt
    };

    const sql = `INSERT INTO skills (skill, imageSrc, imgAlt) VALUES (?, ?, ?)`;
    db.run(sql, [skillEntry.skill, skillEntry.src, skillEntry.alt], function(err) {
        if (err) return console.error("\n" + err.message);
    });

}
module.exports = skills;