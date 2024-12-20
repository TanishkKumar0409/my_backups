import Storage from "../../Modals/Storage.js";

const createFolder = async (req, res) => {
    try {
        const { username, folderName, rootFolder } = req.body;

        if (!folderName || !rootFolder) {
            return res.status(400).json({ error: "Folder name and root folder are required" });
        }

        const userStorage = await Storage.findOne({ username });
        if (!userStorage) {
            return res.status(404).json({ error: "User not found" });
        }

        if (userStorage?.root === folderName) {
            return res.status(400).json({ error: "Do not create a folder with the same name as the root directory" });
        }

        const addFolderToTree = (children, root) => {
            for (const child of children) {
                if (child.root === root) {
                    child.children.push({
                        root: folderName,
                        type: "folder",
                        children: []
                    });
                    return true;
                }

                if (child.children.length > 0) {
                    const added = addFolderToTree(child.children, root);
                    if (added) return true;
                }
            }
            return false;
        };

        if (userStorage.root === rootFolder) {
            userStorage.children.push({
                root: folderName,
                type: "folder",
                children: []
            });
        } else {
            const folderAdded = addFolderToTree(userStorage.children, rootFolder);

            if (!folderAdded) {
                return res.status(404).json({ error: "Root folder not found in the directory structure" });
            }
        }

        await userStorage.save();

        return res.status(201).json({ message: "Folder created successfully", data: userStorage });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default createFolder;
