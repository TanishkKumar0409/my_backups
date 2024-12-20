import mongoose from "mongoose";

const { Schema } = mongoose;

const childSchema = new Schema({
    root: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['file', 'folder'],
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
        children: [Schema.Types.Mixed]
    }, { _id: false })]
});

const fileExplorerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    root: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'folder'
    },
    usedSize: {
        type: Number,
        required: true,
        default: 0
    },
    allotedSize: {
        type: Number,
        default: 1024 * 1024 * 1024,
    },
    children: [childSchema]
});

const Storage = mongoose.model('Storage', fileExplorerSchema);

export default Storage;
