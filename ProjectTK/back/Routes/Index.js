const express = require('express');
const multer = require('multer');
const { addFile } = require('../controllers/addFileController.js');

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Uploads'); // Set your upload directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
    },
});

// Initialize multer with storage configuration
const upload = multer({ storage });

// Create an express router
const router = express.Router();

// Route to handle file uploads
// 'files' is the field name in the form
router.post('/upload', upload.array('files', 10), addFile); // Allow up to 10 files

module.exports = router;
