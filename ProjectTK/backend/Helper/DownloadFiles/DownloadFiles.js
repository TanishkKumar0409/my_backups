import History from "../../Modals/History.js";
import archiver from "archiver";
import path from "path";
import fs from "fs";

const DownloadFiles = async (req, res) => {
  try {
    const { sharingId } = req.params;

    // Fetch the history record
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

    // Validate file paths and names
    if (
      !filePaths ||
      !Array.isArray(filePaths) ||
      filePaths.length === 0 ||
      filePaths.some((filePath) => !filePath)
    ) {
      return res.status(400).json({ error: "Download link has expired." });
    }

    if (!fileNames || fileNames.length !== filePaths.length) {
      return res
        .status(500)
        .json({ error: "Mismatch between file names and file paths." });
    }

    // Prepare ZIP file
    const zipFilename = `shared-files-${senderUsername}.zip`;
    const zipPath = path.resolve("./Uploads/shareFiles", zipFilename);

    // Ensure the directory for ZIP file exists
    const zipDirectory = path.dirname(zipPath);
    if (!fs.existsSync(zipDirectory)) {
      fs.mkdirSync(zipDirectory, { recursive: true });
    }

    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    // Pipe the archive to the output file
    archive.pipe(output);

    // Track added files to avoid duplicates
    const addedFiles = new Set();

    // Add files to the archive
    filePaths.forEach((filePath, index) => {
      const resolvedFilePath = path.resolve(filePath);

      // Ensure the file exists
      if (fs.existsSync(resolvedFilePath)) {
        const safeFileName = fileNames[index] || path.basename(filePath);

        // Avoid adding duplicate files
        if (!addedFiles.has(resolvedFilePath)) {
          addedFiles.add(resolvedFilePath);
          archive.file(resolvedFilePath, { name: safeFileName });
        } else {
          console.warn(`Skipping duplicate file: ${resolvedFilePath}`);
        }
      } else {
        console.warn(`File not found: ${resolvedFilePath}`);
      }
    });

    // Finalize the archive
    archive.finalize();

    // Handle successful archive creation
    output.on("close", () => {
      console.log(`ZIP file created: ${zipPath} (${archive.pointer()} bytes)`);

      res.download(zipPath, zipFilename, (error) => {
        if (error) {
          console.error("Error downloading the ZIP file:", error);
          return res
            .status(500)
            .json({ error: "Error downloading the file." });
        }

        console.log("File downloaded successfully");

        // Delete the ZIP file after successful download
        fs.unlink(zipPath, (error) => {
          if (error) {
            console.error("Error deleting the ZIP file:", error);
          } else {
            console.log("ZIP file deleted successfully");
          }
        });
      });
    });

    // Handle archive stream errors
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
