const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
    fileNames: [{ type: String, required: true }],
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
