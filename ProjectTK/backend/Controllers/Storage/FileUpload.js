import Storage from "../../Modals/Storage.js";
import Users from "../../Modals/Users.js";
const FileUpload = async (req, res) => {
    try {
        const { parentId } = req.body;
        const { username } = req.params;

        if (!parentId || !req.files || req.files.length === 0) {
            return res.status(400).json({ error: "Required fields missing or no files uploaded" });
        }

        const isUser = await Users.findOne({ username });
        if (!isUser) {
            return res.status(404).json("Please Register first");
        }

        const folder = await Storage.findOne({ folderId: parentId, username, type: "folder" });
        if (!folder) {
            return res.status(404).json({ error: "Folder not found" });
        }

        let parentFolder = null;
        if (parentId) {
            parentFolder = await Storage.findOne({ folderId: parentId, username });
            if (!parentFolder) {
                return res.status(404).json({ error: "Parent folder not found" });
            }
        }

        const savedFiles = [];

        // Iterate over each uploaded file and save as a separate document
        for (let file of req.files) {
            const lastFolder = await Storage.findOne({ username }).sort({ folderId: -1 });
            const fileId = lastFolder ? lastFolder.folderId + 1 : 1;

            const newFile = new Storage({
                folderId: fileId,
                username,
                root: file.originalname,
                type: "file",
                parentId: folder.folderId,
                children: [],
                filePath: file.path,
                fileSize: file.size,
            });

            const savedFile = await newFile.save();
            if (savedFile) {
                savedFiles.push(savedFile);

                // Update parent folder's children array
                await Storage.findOneAndUpdate(
                    { folderId: parentFolder.folderId, username },
                    { $push: { children: savedFile.folderId } },
                    { new: true }
                );
            } else {
                return res.status(500).json({ error: "File upload failed for one or more files" });
            }
        }

        res.status(201).json({
            message: "Files uploaded successfully",
            savedFiles,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default FileUpload;
