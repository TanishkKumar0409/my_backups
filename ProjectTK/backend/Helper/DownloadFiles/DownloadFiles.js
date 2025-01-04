import History from "../../Modals/History.js";
import archiver from "archiver";
import path from "path";
import fs from "fs";

const DownloadFiles = async (req, res) => {
  try {
    const { sharingId } = req.params;

    const historyRecord = await History.findOne({ sharingId: sharingId });
    if (!historyRecord) {
      return res
        .status(404)
        .json({ error: "No files found for the given SharingId." });
    }

    const {
      senderUsername,
      fileName: fileNames,
      filePath: filePaths,
    } = historyRecord;

    if (!filePaths || filePaths.length === 0) {
      return res.status(400).json({ error: "Download link has expired" });
    }

    const zipFilename = `shared-files-${senderUsername}.zip`;
    const zipPath = path.resolve("./Uploads/shareFiles", zipFilename);
    const archive = archiver("zip", { zlib: { level: 9 } });

    const output = fs.createWriteStream(zipPath);
    archive.pipe(output);

    filePaths.forEach((filePath, index) => {
      archive.file(filePath, { name: fileNames[index] });
    });

    await archive.finalize();

    output.on("close", () => {
      console.log(`ZIP file created: ${zipPath} (${archive.pointer()} bytes)`);

      fs.access(zipPath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error("ZIP file does not exist:", err);
          return res.status(500).json({ error: "ZIP file creation failed." });
        }

        res.download(zipPath, zipFilename, (error) => {
          if (error) {
            console.error("Error downloading the ZIP file:", error);
            return res
              .status(500)
              .json({ error: "Error downloading the file." });
          }

          console.log("File downloaded successfully");

          fs.unlink(zipPath, (error) => {
            if (error) {
              console.error("Error deleting the ZIP file:", error);
            } else {
              console.log("ZIP file deleted successfully");
            }
          });
        });
      });
    });

    output.on("error", (error) => {
      console.error("Stream error:", error);
      res.status(500).json({ error: "Error creating the ZIP file." });
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message });
  }
};

export default DownloadFiles;
