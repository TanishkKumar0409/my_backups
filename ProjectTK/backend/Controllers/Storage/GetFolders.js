import Storage from "../../Modals/Storage.js";

const GetFolder = async (req, res) => {
    try {
        const { username } = req.params;

        const folders = await Storage.find({ username });

        if (folders) {
            return res.status(200).json(folders);
        } else {
            return res.status(404).json({ error: "No Folder Found" });
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default GetFolder