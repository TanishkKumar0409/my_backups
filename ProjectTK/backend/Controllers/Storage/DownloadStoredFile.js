import path from 'path';
import fs from 'fs';
import Storage from '../../Modals/Storage.js';

const DownloadStoredFile = async (req, res) => {
    try {
        const { username, folderId } = req.query;

        if (!username || !folderId) {
            return res.status(400).json({ error: "username and folderId are required" });
        }

        const file = await Storage.findOne({ username, folderId });

        if (!file || !file.filePath && !file.root) {
            return res.status(404).json({ error: "File not found" });
        }

        const absolutePath = path.resolve(file.filePath);

        if (!fs.exists(absolutePath, (error) => { if (error) { console.log(error.message) } })) {
            return res.status(404).json({ error: "File does not exist on the server" });
        }

        res.download(absolutePath, file.root, (err) => {
            if (err) {
                console.error("Error during file download:", err);
                return res.status(500).json({ error: "Error downloading the file" });
            }
        });
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export default DownloadStoredFile;
