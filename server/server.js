/**
 * server: Express app configuration and bootstrapping.
 * - Registers API routes (projects, gallery, experience, skills, contact)
 * - Enables CORS for allowed origins and JSON parsing
 * - Serves static files under `/storage`
 * - Starts HTTP server and attaches CLI for DB utilities
 */
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const PORT = 4000;

//Routes
const projectRoutes = require('./routes/Projects');
const galleryRoutes = require('./routes/Gallery');
const experienceRoutes = require('./routes/Experience');
const skillsRoutes = require('./routes/Skills');
const contactRoutes = require('./routes/Contact');

//Add CLI
const commandline = require('./cli');

const allowed = ['https://portfolio.bcwendell.com', 'http://localhost:3002'];
app.use(cors({ origin: allowed, credentials: true }));
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contact', contactRoutes);

//Serves uploaded files to front end
app.use('/storage', express.static(path.join(__dirname, 'storage')));



app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

commandline();
