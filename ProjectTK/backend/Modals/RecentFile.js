import mongoose from "mongoose";

const RecentSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    recentFiles: [
        {
            filePath: {
                type: String,
                required: true
            },
            usedDate: {
                type: Date,
                required: true
            }
        }
    ]
});

const Recent = mongoose.model("Recent", RecentSchema)

export default Recent;