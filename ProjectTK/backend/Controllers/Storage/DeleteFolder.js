import Storage from "../../Modals/Storage.js";
import Users from "../../Modals/Users.js";

const DeleteFolder = async (req, res) => {
    try {
        const { username, folderId } = req.body;

        if (!username || !folderId) {
            return res.status(400).json({ error: "All Fields Required" });
        }

        const isUser = await Users.findOne({ username });
        if (!isUser) {
            return res.status(404).json("Please Register first");
        }

        if (isUser.status === "BLOCKED") {
            return res.status(400).json({ error: "Sorry, You are Blocked" });
        }

        if (folderId === 1) {
            return res.status(400).json({ error: "You cannot delete this folder" });
        }

        const isFolder = await Storage.findOne({ username, folderId });
        if (!isFolder) {
            return res.status(400).json({ error: "This folder does not exist" });
        }

        const deleteChildren = async (parentFolderId) => {
            const children = await Storage.find({ username, parentId: parentFolderId });
            for (const child of children) {
                await deleteChildren(child.folderId);
                await Storage.findOneAndDelete({ username, folderId: child.folderId });
            }
        };

        await deleteChildren(folderId);

        const deletedFolder = await Storage.findOneAndDelete({ username, folderId });
        if (deletedFolder) {
            const deleteParentId = deletedFolder.parentId;
            if (deleteParentId) {
                await Storage.findOneAndUpdate({ username, folderId: deleteParentId }, {
                    $pull: {
                        children: folderId
                    }
                }, { new: true });

                if (deletedFolder.type === "file") {
                    const currentUsedSize = isUser.usedStorage || 0;
                    const updatedUsedSize = currentUsedSize - deletedFolder.fileSize;

                    await Users.findOneAndUpdate(
                        { username },
                        { $set: { usedStorage: updatedUsedSize } },
                        { new: true }
                    );
                }
            }
        }

        return res.status(200).json({ message: "Foler/File Delete Successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
};

export default DeleteFolder;
