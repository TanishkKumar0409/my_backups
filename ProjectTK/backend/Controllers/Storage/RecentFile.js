import Recent from "../../Modals/RecentFile.js";
import Users from "../../Modals/Users.js";

const RecentFile = async (req, res) => {
    try {
        const { username, filePath } = req.body;

        if (!username || !filePath) {
            return res.status(400).json({ error: "Required fields missing" });
        }

        const isUser = await Users.findOne({ username });
        if (!isUser) {
            return res.status(404).json({ error: "Please Register first" });
        }

        if (isUser.status === "BLOCKED") {
            return res.status(400).json({ error: "Sorry, You are Blocked" });
        }

        const isRecent = await Recent.findOne({ username });

        const isExisting = await Recent.findOne({ username, "recentFiles.filePath": filePath })
        if (isExisting) {
            return res.status(400).json({ error: "Same File" })
        }

        if (!isRecent) {
            const createNewRecent = Recent({
                username,
                recentFiles: [
                    {
                        filePath,
                        usedDate: Date.now()
                    }
                ]
            });
            const savedRecent = await createNewRecent.save()

            return res.status(201).json({ message: "Created User Recent", savedRecent })
        }

        const recentLength = isRecent?.recentFiles.length;

        if (isRecent) {
            if (recentLength >= 5) {
                const oldestFile = isRecent.recentFiles.reduce((oldest, current) => {
                    return current.usedDate < oldest.usedDate ? current : oldest;
                });

                await Recent.findOneAndUpdate({ username }, {
                    $pull: { recentFiles: { _id: oldestFile._id } },
                })
                await Recent.findOneAndUpdate({ username }, {
                    $push: {
                        recentFiles: {
                            filePath,
                            usedDate: Date.now()
                        }
                    }
                }, { new: true })

                return res.status(200).json({ message: "File Add To Recent" })
            }
            else {
                const addRecentFile = await Recent.findOneAndUpdate({ username }, {
                    $push: {
                        recentFiles: {
                            filePath,
                            usedDate: Date.now()
                        }
                    }
                }, { new: true })
                return res.status(200).json({ message: "File Add To Recent", addRecentFile })
            }
        }

        return res.json(isRecent)


    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default RecentFile;