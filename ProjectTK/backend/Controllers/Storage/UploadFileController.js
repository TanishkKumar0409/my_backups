import Storage from "../../Modals/Storage.js";
import fs from "fs";
const uploadFile = async (req, res) => {
    try {
        const { username, currentFolder } = req.body;
        const files = req.files;

        if (!files || files.length === 0) {
            return res.status(400).json({ message: "No files uploaded" });
        }

        const userStorage = await Storage.findOne({ username });

        if (!userStorage) {
            return res.status(404).json({ message: "User storage not found" });
        }

        if (userStorage.usedSize >= userStorage.allotedSize) {
            return res.status(400).json({ error: "You Do not Have Space" })
        }

        const remainingSize = userStorage.allotedSize - userStorage.usedSize;
        const totalFilesSize = files.reduce((total, file) => total + file.size, 0);
        const currentSize = userStorage.usedSize;
        const usedSize = currentSize + totalFilesSize;

        if (remainingSize < totalFilesSize) {
            files.forEach(file => fs.unlinkS(file.path, (err) => console.log(err)));
            return res.status(400).json({ message: "Not enough storage space" });
        }

        const paths = currentFolder.split("/").map(path => path.trim()).filter(Boolean);

        let folder = userStorage;

        for (const path of paths) {
            folder = folder.children.find(
                (child) => child.type === "folder" && child.root === path
            );
            if (!folder) {
                return res.status(400).json({
                    message: `Folder path is invalid. Could not locate folder: "${path}"`,
                });
            }
        }

        const addedFiles = files.map(file => ({
            root: file.filename,
            fileName: file.originalname,
            type: "file",
            size: file.size,
        }));

        folder.children.push(...addedFiles);

        userStorage.usedSize += totalFilesSize;

        const savedFile = await userStorage.save();
        if (savedFile) {
            const setUsedSize = await Storage.findOneAndUpdate({ username }, { $set: { usedSize: usedSize } }, { new: true })
        }
        return res.status(201).json({ message: "Files uploaded successfully", savedFile });
    } catch (error) {
        console.error("Error uploading files:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default uploadFile;
