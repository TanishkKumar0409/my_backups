import mongoose from "mongoose";


const HistorySchema = mongoose.Schema({
    SenderUsername: {
        type: String,
        required: true
    },
    SharingId: {
        type: Number,
        requried: true
    },
    files: [
        {
            fileName: {
                type: String,
                required: true
            },
            filePath: {
                type: String,
                required: true
            }
        }
    ],
    reciverEmail: {
        type: String,
        requried: true
    },
    message: {
        type: String,
        required: true
    },
    downloadLink: {
        type: String,
        required: true
    },
    downloadLinkExpiry: {
        type: Date,
        required: true
    },
    deleteStatus: {
        type: String,
        required: true
    },
    sharedAt: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

const History = mongoose.model("FileHistory", HistorySchema);

export default History;