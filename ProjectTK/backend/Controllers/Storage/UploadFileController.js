import Storage from "../../Modals/Storage.js";
import fs from "fs";
const uploadFile = async (req, res) => {
    try {
        const { username, currentFolder } = req.body;
        const files = req.files; // Array of files

        if (!files || files.length === 0) {
            return res.status(400).json({ message: "No files uploaded" });
        }

        // Find the user's storage in the database
        const userStorage = await Storage.findOne({ username });

        if (!userStorage) {
            return res.status(404).json({ message: "User storage not found" });
        }

        const remainingSize = userStorage.allotedSize - userStorage.usedSize;
        const totalFilesSize = files.reduce((total, file) => total + file.size, 0);

        // Check if there is enough space for all the files
        if (remainingSize < totalFilesSize) {
            // Delete the files if not enough space
            files.forEach(file => fs.unlinkSync(file.path));
            return res.status(400).json({ message: "Not enough storage space" });
        }

        // If the current folder path is provided, handle it by splitting into segments
        const paths = currentFolder.split("/").map(path => path.trim()).filter(Boolean);

        let folder = userStorage;  // Start from the root of the userStorage

        // Traverse through the folders based on the full path provided
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

        // Ensure each file gets a fileName and is correctly added
        const addedFiles = files.map(file => ({
            root: file.filename,
            fileName: file.originalname, // Store the original file name
            type: "file",
            size: file.size,
        }));

        folder.children.push(...addedFiles);

        // Update the used storage size
        userStorage.usedSize += totalFilesSize;

        // Save changes
        await userStorage.save();

        return res.status(201).json({ message: "Files uploaded successfully", files });
    } catch (error) {
        console.error("Error uploading files:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default uploadFile;
