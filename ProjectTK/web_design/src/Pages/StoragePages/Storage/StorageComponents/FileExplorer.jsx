import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateFolderModal from "./CreateFolderModal";
import { noFileAPI } from "../../../../Services/API/API";

export default function FileExplorer() {
    const [currentFolder, setCurrentFolder] = useState(null);
    const [folderStack, setFolderStack] = useState([]);
    const [newFolderName, setNewFolderName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const username = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        const fetchFolderData = async () => {
            try {
                const response = await noFileAPI.get(`/store/folders/${username}`);
                setCurrentFolder(response.data);
            } catch (error) {
                console.error("Error fetching folder data:", error);
            }
        };
        fetchFolderData();
    }, [username]);

    const handleFolderClick = (folder) => {
        setFolderStack([...folderStack, currentFolder]);
        setCurrentFolder(folder);
    };

    const handleBack = () => {
        const previousFolder = folderStack.pop();
        setCurrentFolder(previousFolder);
        setFolderStack([...folderStack]);
    };

    const handleFileClick = (file) => {
        navigate("/file-preview", { state: { file } });
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const newFile = {
                root: file.name,
                type: "file",
                size: file.size,
            };
            setCurrentFolder((prev) => ({
                ...prev,
                children: [...prev.children, newFile],
            }));
        }
    };

    const handleCreateFolder = async () => {
        if (newFolderName.trim()) {
            try {
                const rootFolder = currentFolder?.root || "root";
                const response = await noFileAPI.post("/store/create/folder", {
                    username,
                    folderName: newFolderName,
                    rootFolder,
                });

                if (response.status === 201) {
                    const newFolder = {
                        root: newFolderName,
                        type: "folder",
                        children: [],
                    };
                    setCurrentFolder((prev) => ({
                        ...prev,
                        children: [...prev.children, newFolder],
                    }));
                    setNewFolderName("");
                    setIsModalOpen(false);
                }
            } catch (error) {
                console.error("Error creating folder:", error);
            }
        }
    };

    return (
        <section className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-4 text-uppercase fw-bold">File Explorer</h2>
                {folderStack.length > 0 && (
                    <button onClick={handleBack} className="btn btn-light shadow-sm mb-4 rounded-circle">
                        <i className="fa fa-arrow-left"></i>
                    </button>
                )}

                <div className="row mb-4">
                    <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                        <div
                            className="box-container cursor-pointer border rounded-3 p-3 text-center"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <div className="icon-container">
                                <i className="fa fa-folder-plus text-primary"></i>
                            </div>
                            <span>Create Folder</span>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                        <div
                            className="box-container cursor-pointer border rounded-3 p-3 text-center"
                            onClick={() => document.getElementById("fileInput").click()}
                        >
                            <div className="icon-container">
                                <i className="fa fa-cloud-upload-alt text-success"></i>
                            </div>
                            <span>Upload File</span>
                        </div>
                        <input type="file" onChange={handleFileUpload} style={{ display: "none" }} id="fileInput" />
                    </div>
                </div>

                <div className="row">
                    {currentFolder?.children?.length > 0 ? (
                        currentFolder.children.map((child, index) => (
                            <div
                                className="col-6 col-md-3 d-flex flex-column align-items-center mb-4"
                                key={index}
                            >
                                <div
                                    className="icon-container bg-white border rounded-3 d-flex justify-content-center align-items-center"
                                    onClick={() =>
                                        child.type === "folder" ? handleFolderClick(child) : handleFileClick(child)
                                    }
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <i className={`fa ${child.type === "folder" ? "fa-folder text-warning" : "fa-file text-danger"}`}></i>
                                </div>
                                <span className="folder-name mt-2">{child.root}</span>
                            </div>
                        ))
                    ) : (
                        <h5 className="text-center">
                            {currentFolder ? "No items in this folder." : "Loading..."}
                        </h5>
                    )}
                </div>

                <CreateFolderModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    newFolderName={newFolderName}
                    setNewFolderName={setNewFolderName}
                    handleCreateFolder={handleCreateFolder}
                />
            </div>
        </section>
    );
}
