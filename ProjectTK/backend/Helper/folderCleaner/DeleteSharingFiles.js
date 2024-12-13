import History from "../../Modals/History.js";
import fs from "fs/promises";

const deleteSharingFiles = async (req, res) => {
    const fileData = await History.find().sort({ SharingId: 1 });

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
                    { SharingId: record.SharingId },
                    {
                        $set: { deleteStatus: "DELETED" },
                        $unset: {
                            downloadLinkExpiry: "",
                            downloadLink: "",
                            filePath: ""
                        }
                    },
                    { new: true }
                );

                if (!updateResult) {
                    console.log(`Record with SharingId ${record.SharingId} not found.`);
                }
            }
        }
    }

};

export default deleteSharingFiles;
