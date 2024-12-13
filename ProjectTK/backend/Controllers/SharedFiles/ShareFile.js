import SharingMailer from "../../Helper/Mailers/SharingMailer.js";
import History from "../../Modals/History.js";

const ShareFiles = async (req, res) => {
    try {
        let { email, message } = req.body;
        const { username } = req.params;


        if (!message) {
            message = "No Message provided"
        }

        const lastSharedFile = await History.findOne().sort({ SharingId: -1 })
        const SharingId = lastSharedFile ? lastSharedFile.SharingId + 1 : 1;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "No files uploaded." });
        }

        const fileNames = req.files.map(file => file.originalname);
        const filePaths = req.files.map(file => file.path);

        const downloadLink = `http://localhost:5000/api/share/download/${SharingId}`;

        const newHistory = new History({
            SenderUsername: username,
            SharingId,
            fileName: fileNames,
            filePath: filePaths,
            receiverEmail: email,
            downloadLink,
            downloadLinkExpiry: new Date(Date.now() + 60000),
            deleteStatus: "PENDING",
            message
        });

        const savedHistory = await newHistory.save();

        SharingMailer({ email, downloadLink })

        if (savedHistory) {
            res.status(200).json({
                message: "Files shared successfully.",
                savedHistory
            });
        }


    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default ShareFiles