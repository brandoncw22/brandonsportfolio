/**
 * script/gallery: Insert a gallery image record.
 * @param {string} filename - file name stored under /storage/gallery
 * @param {string} alt - alt text for accessibility
 * @param {string} desc - caption/description for the image
 */
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

