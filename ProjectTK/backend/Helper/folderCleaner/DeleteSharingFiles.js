import History from "../../Modals/History.js";
import fs from "fs/promises";

const deleteSharingFiles = async (req, res) => {
    const fileData = await History.find().sort({ sharingId: 1 });

    for (const record of fileData) {
        if (record.deleteStatus === "PENDING") {
            const currentTime = Date.now();

            if (currentTime > new Date(record.downloadLinkExpiry).getTime()) {
                for (let i = 0; i < record.filePath.length; i++) {
                    try {
                        const filePath = record.filePath[i];
                        await fs.access(filePath);
                        await fs.unlink(filePath);
                    } catch (err) {
                        if (err.code === "ENOENT") {
                            console.log(`File does not exist: ${record.filePath[i]}`);
                        } else {
                            console.error(`Error deleting file: ${record.filePath[i]}`, err);
                        }
                    }
                }

                const updateResult = await History.findOneAndUpdate(
                    { sharingId: record.sharingId },
                    {
                        $set: { deleteStatus: "DELETED" },
                        $unset: {
                            filePath: "",
                            downloadLinkExpiry: "",
                            downloadLink: ""
                        }
                    },
                    { new: true }
                );

                if (!updateResult) {
                    console.log(`Record with sharingId ${record.sharingId} not found.`);
                }
            }
        }
    }

};

export default deleteSharingFiles;
