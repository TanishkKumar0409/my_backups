import History from "../../Modals/History.js";
import fs from "fs/promises";

const deleteSharingFiles = async (req, res) => {
    const fileData = await History.find().sort({ SharingId: 1 });

    for (const record of fileData) {
        if (record.deleteStatus === "PENDING") {
            const currentTime = Date.now();

            if (currentTime > new Date(record.downloadLinkExpiry).getTime()) {
                for (const file of record.files) {
                    console.log("Checking file:", file.filePath);

                    try {
                        await fs.access(file.filePath);

                        await fs.unlink(file.filePath);
                        console.log("File Deleted:", file.filePath);
                    } catch (err) {
                        if (err.code === "ENOENT") {
                            console.log(`File does not exist: ${file.filePath}`);
                        } else {
                            console.error(`Error deleting file: ${file.filePath}`, err);
                        }
                    }
                }

                const updateResult = await History.findOneAndUpdate(
                    { SharingId: record.SharingId },
                    { $set: { deleteStatus: "DELETED" } },
                    { new: true }
                );

                if (updateResult) {
                    console.log(`Record with SharingId ${record.SharingId} marked as deleted.`);
                } else {
                    console.log(`Record with SharingId ${record.SharingId} not found.`);
                }
            }
        }
    }


};

export default deleteSharingFiles;
