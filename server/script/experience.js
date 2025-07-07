const db = require('../db/db');

function experience (title, company, begin, end, src, alt, desc){
    const experienceEntry = {
        title,
        company,
        begin,
        end,
        src: `http://localhost:4000/storage/experience/${src}`,
        alt,
        desc
    };

    const sql = `INSERT INTO experience (jobTitle, jobCompany, beginDate, endDate, imageSrc, imgAlt, desc) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.run(sql, [experienceEntry.title, experienceEntry.company, experienceEntry.begin, 
        experienceEntry.end, experienceEntry.src, experienceEntry.alt, experienceEntry.desc
    ], function(err) {
        if (err) return console.error(err.message);
    });

    
}
module.exports = experience;