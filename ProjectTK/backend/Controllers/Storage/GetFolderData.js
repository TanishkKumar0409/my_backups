import Storage from "../../Modals/Storage.js";

const GetFolderData = async (req, res) => {
    try {
        const { username } = req.params;

        const Folders = await Storage.findOne({ username })
        if (Folders) {
            return res.status(200).json(Folders)
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export default GetFolderData