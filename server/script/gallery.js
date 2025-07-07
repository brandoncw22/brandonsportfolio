const db = require('../db/db');

function gallery (filename, alt, desc){
    const galleryImage = {
        src: `http://localhost:4000/storage/gallery/${filename}`,
        alt,
        desc
    };

    const sql = `INSERT INTO image_gallery (src, alt, desc) VALUES (?, ?, ?)`;
    db.run(sql, [galleryImage.src, galleryImage.alt, galleryImage.desc], function(err) {
        if (err) return console.error(err.message);
    });

    
}
module.exports = gallery;


