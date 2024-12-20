import mongoose from 'mongoose';

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
    children: [{
        type: Schema.Types.ObjectId,
        ref: 'Storage'
    }]
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
        default: 'folder',
    },
    usedSize: {
        type: Number,
        required: true
    },
    allotedSize: {
        type: Number,
        default: 1024 * 1024 * 1024,
    },
    children: [childSchema]
});

const Storage = mongoose.model('Storage', fileExplorerSchema);

export default Storage;
