import Storage from "../../Modals/Storage.js";
import Users from "../../Modals/Users.js";

const FileUpload = async (req, res) => {
    try {
        const { parentId } = req.body;
        const { username } = req.params;

        if (!parentId || !req.file) {
            return res.status(400).json({ error: "Required fields missing or no file uploaded" });
        }

        const isUser = await Users.findOne({ username });
        if (!isUser) {
            return res.status(404).json("Please Register first");
        }

        if (isUser.status === "BLOCKED") {
            return res.status(400).json({ error: "Sorry, You are Blocked" });
        }

        const folder = await Storage.findOne({ folderId: parentId, username, type: "folder" });
        if (!folder) {
            return res.status(404).json({ error: "Folder not found" });
        }

        const currentUsedSize = isUser.usedStorage;
        const totalSize = isUser.totalStorage;
        const remainingSize = totalSize - currentUsedSize;
        const usedSize = req.file ? req.file.size + currentUsedSize : "0";

        if (currentUsedSize >= totalSize) {
            return res.status(400).json({ error: "Storage Full" });
        }

        if (req.file.size > remainingSize) {
            return res.status(400).json({ error: "Do not have Enough Space" });
        }

        let parentFolder = null;
        if (parentId) {
            parentFolder = await Storage.findOne({ folderId: parentId, username });
            if (!parentFolder) {
                return res.status(404).json({ error: "Parent folder not found" });
            }
        }

        const lastFolder = await Storage.findOne({ username }).sort({ folderId: -1 });
        const fileId = lastFolder ? lastFolder.folderId + 1 : 1;

        const newFile = new Storage({
            folderId: fileId,
            username,
            root: req.file.originalname,
            type: "file",
            parentId: folder.folderId,
            children: [],
            filePath: req.file.path,
            fileSize: req.file.size,
        });

        const savedFile = await newFile.save();
        if (savedFile) {
            await Storage.findOneAndUpdate(
                { folderId: parentFolder.folderId, username },
                { $push: { children: savedFile.folderId } },
                { new: true }
            );

            await Users.findOneAndUpdate({ username }, { $set: { usedStorage: usedSize } }, { new: true });

            res.status(201).json({
                message: "File uploaded successfully",
                savedFile,
            });
        } else {
            return res.status(500).json({ error: "File upload failed" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default FileUpload;
