const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

console.log(__dirname);


// Serve static files from the client folder
app.use(express.static('../src'));

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadsDir = path.join(__dirname, '../../uploads');
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir);
        }
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
         cb(null, file.originalname); // ORIGINAL! this is where the filename is set 
        // cb(null, 'XYZ.mp3'); // SPECIFEIED file name
        //const randomId = uuid.v4(); // RANDOM ID filename - now doing on the front end. Generate a random ID
        //const fileExtension = path.extname(file.originalname);
        //const fileName = `${randomId}${fileExtension}`;
        //cb(null, fileName);
    }
});

app.get('/randomId', (req, res) => {
    res.send(randomId); // Send the randomId as the response
});

const upload = multer({ storage: storage });

// File upload route
app.post('/upload', upload.array('files', 12), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    res.send('Files uploaded successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
