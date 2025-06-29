const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const PORT = 4000;

app.use(cors());
app.use(express.json());

//Serves uploaded files to front end
app.use('/storage', express.static(path.join(__dirname, 'storage')));

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));