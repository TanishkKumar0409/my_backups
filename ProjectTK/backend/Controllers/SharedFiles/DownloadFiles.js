import History from "../../Modals/History.js";
import archiver from "archiver";
import path from "path";
import fs from "fs";

export const DownloadFiles = async (req, res) => {
    try {
        const { sharingId } = req.params;

        // Find the history record by SharingId
        const historyRecord = await History.findOne({ SharingId: sharingId });
        if (!historyRecord) {
            return res.status(404).json({ error: "No files found for the given SharingId." });
        }

        const files = historyRecord.files;

        if (!files || files.length === 0) {
            return res.status(404).json({ error: "No files to download." });
        }

        // Create a ZIP archive
        const zipFilename = `shared-files-${sharingId}.zip`;
        const zipPath = path.join("./Uploads/shareFiles", zipFilename);
        const archive = archiver("zip", { zlib: { level: 9 } });

        const output = fs.createWriteStream(zipPath);
        archive.pipe(output);

        // Add files to the archive
        files.forEach(file => {
            const filePath = file.filePath;
            const fileName = file.fileName;
            archive.file(filePath, { name: fileName });
        });

        await archive.finalize();


        // Serve the ZIP file for download
        output.on("close", () => {
            res.download(zipPath, zipFilename, (err) => {
                if (err) {
                    console.error("Error downloading the ZIP file:", err);
                }

                // Remove the ZIP file after download
                fs.unlink(zipPath, (err) => {
                    if (err) {
                        console.error("Error deleting the ZIP file:", err);
                    }
                });
            });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
