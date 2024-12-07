const Submission = require('../Modals/FileModal.js'); // Adjust the path to your model
const path = require('path');

// Controller to handle file submissions
const addFile = async (req, res) => {
    try {
        const { email, message } = req.body;

        // Ensure that files are uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }

        // Extract file names
        const fileNames = req.files.map(file => file.filename);

        // Validate email
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Create a new submission
        const newSubmission = new Submission({
            email,
            message,
            fileNames,
        });

        // Save submission to the database
        await newSubmission.save();

        // Respond with success
        res.status(201).json({ message: 'Files uploaded successfully', submission: newSubmission });
    } catch (error) {
        console.error('Error adding file:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { addFile };
