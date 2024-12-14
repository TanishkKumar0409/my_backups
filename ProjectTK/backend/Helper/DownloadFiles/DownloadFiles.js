import History from "../../Modals/History.js";
import archiver from "archiver";
import path from "path";
import fs from "fs";

const DownloadFiles = async (req, res) => {
    try {
        const { sharingId } = req.params;

        const historyRecord = await History.findOne({ sharingId: sharingId });
        if (!historyRecord) {
            return res.status(404).json({ error: "No files found for the given SharingId." });
        }

        const { senderUsername, fileName: fileNames, filePath: filePaths } = historyRecord;

        if (!filePaths || filePaths.length === 0) {
            return res.status(404).json({ error: "No files to download." });
        }

        const zipFilename = `shared-files-${senderUsername}.zip`;
        const zipPath = path.join("./Uploads/shareFiles", zipFilename);
        const archive = archiver("zip", { zlib: { level: 9 } });

        const output = fs.createWriteStream(zipPath);
        archive.pipe(output);

        filePaths.forEach((filePath, index) => {
            archive.file(filePath, { name: fileNames[index] });
        });

        await archive.finalize();

        output.on("close", () => {
            res.download(zipPath, zipFilename, (err) => {
                if (err) {
                    console.error("Error downloading the ZIP file:", err);
                }

                fs.unlink(zipPath, (err) => {
                    if (err) {
                        console.error("Error deleting the ZIP file:", err);
                    }
                });
            });
        });

        output.on("error", (err) => {
            console.error("Error creating ZIP file:", err);
            res.status(500).json({ error: "Error creating ZIP file." });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default DownloadFiles;