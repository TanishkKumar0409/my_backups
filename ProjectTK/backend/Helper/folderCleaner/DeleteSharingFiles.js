import History from "../../Modals/History.js";
import fs from "fs/promises";

const deleteSharingFiles = async (req, res) => {
    try {
        const fileData = await History.find().sort({ SharingId: 1 });

        for (const record of fileData) {
            if (record.deleteStatus === "PENDING") {
                const currentTime = Date.now();

                if (currentTime > new Date(record.downloadLinkExpiry).getTime()) {
                    for (const file of record.files) {
                        try {
                            await fs.access(file.filePath);

                            await fs.unlink(file.filePath);
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
                        {
                            $set: { deleteStatus: "DELETED" }, $unset: {
                                downloadLinkExpiry: "",
                                downloadLink: "",
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
    } catch (error) {
        console.log(error)
        return res.status(500).json("server erro")
    }
};

export default deleteSharingFiles;
