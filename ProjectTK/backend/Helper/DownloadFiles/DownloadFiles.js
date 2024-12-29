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
            return res.status(404).json({ error: "Download link has been Expired" });
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
            res.download(zipPath, zipFilename, (error) => {
                if (error) {
                    console.error("Error downloading the ZIP file:", error);
                }

                fs.unlink(zipPath, (error) => {
                    if (error) {
                        console.error("Error deleting the ZIP file:", error);
                    } else {
                        console.log("Zip Deleted")
                    }
                });
            });
        });

        output.on("error", (error) => {
            res.status(500).json({ error: error.message });
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default DownloadFiles;