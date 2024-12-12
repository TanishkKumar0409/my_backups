import History from "../../Modals/History.js";
import fs from "fs/promises";

const deleteSharingFiles = async (req, res) => {
    try {
        const fileData = await History.find().sort({ SharingId: 1 });

        // Loop through each record in the fetched file data
        for (const record of fileData) {
            if (record.deleteStatus === "PENDING") {
                const currentTime = Date.now();

                // Check if the download link has expired
                if (currentTime > new Date(record.downloadLinkExpiry).getTime()) {
                    for (const file of record.files) {
                        console.log("Checking file:", file.filePath);

                        try {
                            // Ensure the file exists before attempting to delete
                            await fs.access(file.filePath);

                            // Delete file only if it exists
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

                    // Update the record status to "DELETED" after file deletion
                    const updateResult = await History.findOneAndUpdate(
                        { SharingId: record.SharingId }, // Make sure "SharingId" matches your schema field
                        { $set: { deleteStatus: "DELETED" } },
                        { new: true } // Optional: returns the updated document
                    );

                    if (updateResult) {
                        console.log(`Record with SharingId ${record.SharingId} marked as deleted.`);
                    } else {
                        console.log(`Record with SharingId ${record.SharingId} not found.`);
                    }
                }
            }
        }

        res.status(200).json({ message: "File paths are being logged and deleted if expired." });
    } catch (error) {
        // console.error("Error processing files:", error);
        // res.status(500).json({ message: "Error processing files." });
    }
};

export default deleteSharingFiles;
