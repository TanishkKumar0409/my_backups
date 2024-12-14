import History from "../../Modals/History.js";

const getSharedHistoryBySharingId = async (req, res) => {
    try {
        const { sharingId } = req.params;

        const IdHistory = await History.findOne({ sharingId });

        if (IdHistory) {
            return res.status(200).json(IdHistory)
        } else {
            return res.status(404).json({ error: "History Not Found" })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default getSharedHistoryBySharingId