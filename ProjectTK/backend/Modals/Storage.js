import mongoose from "mongoose";

const { Schema } = mongoose;

// Child Schema for Nested Structure
const childSchema = new Schema({
    root: {
        type: String,
        required: true // Name of the folder or file
    },
    type: {
        type: String,
        enum: ['file', 'folder'], // It can either be a file or a folder
        required: true
    },
    children: [new Schema({
        root: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['file', 'folder'],
            required: true
        },
        children: [Schema.Types.Mixed] // Allows deeper nesting if needed
    }, { _id: false })] // Prevent Mongoose from creating _id for nested objects
});

// Main Schema for File Explorer
const fileExplorerSchema = new Schema({
    username: {
        type: String,
        required: true // User's unique identifier
    },
    root: {
        type: String,
        required: true // Root directory of the user's file system
    },
    type: {
        type: String,
        default: 'folder' // Root directory is always a folder
    },
    usedSize: {
        type: Number,
        required: true, // Track used storage size in bytes
        default: 0
    },
    allotedSize: {
        type: Number,
        default: 1024 * 1024 * 1024, // Default allotted size: 1 GB
    },
    children: [childSchema] // Array of nested files/folders
});

// Create the Storage model
const Storage = mongoose.model('Storage', fileExplorerSchema);

export default Storage;
