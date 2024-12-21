import React, { useState } from "react";
import CreateFolderModal from "./CreateFolderModal";

export default function FileExplorer({ edata }) {
    const [currentFolderId, setCurrentFolderId] = useState(1);
    const [folderStack, setFolderStack] = useState([]);
    const [newFolderName, setNewFolderName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const currentFolder = edata[currentFolderId];
    const currentChildren = currentFolder?.children.map((id) => edata[id]) || [];

    const handleFolderClick = (folder) => {
        setSelectedItemId(folder.id);
        if (folder.type === "folder") {
            setFolderStack([...folderStack, currentFolderId]);
            setCurrentFolderId(folder.id);
        } else {
            alert(`You clicked on file: ${folder.name}`);
        }
    };

    const handleBack = () => {
        const previousFolderId = folderStack.pop();
        setCurrentFolderId(previousFolderId);
        setFolderStack([...folderStack]);
    };

    const handleCreateFolder = () => {
        if (newFolderName.trim()) {
            const newFolderId = Object.keys(edata).length + 1;
            const newFolder = {
                id: newFolderId,
                name: newFolderName,
                type: "folder",
                parentId: currentFolderId,
                children: [],
            };

            edata[currentFolderId].children.push(newFolderId);
            edata[newFolderId] = newFolder;

            setNewFolderName("");
            setIsModalOpen(false);
        }
    };

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const uploadedFiles = files.map((file, index) => {
            const newFileId = Object.keys(edata).length + index + 1;
            const newFile = {
                id: newFileId,
                name: file.name,
                type: "file",
                parentId: currentFolderId,
                children: [],
            };

            edata[newFileId] = newFile;
            return newFileId;
        });

        edata[currentFolderId].children.push(...uploadedFiles);
        event.target.value = ""; // Clear input for consecutive uploads
    };

    const handleDeleteItem = () => {
        if (selectedItemId) {
            const selectedIndex = edata[currentFolderId].children.indexOf(selectedItemId);
            if (selectedIndex !== -1) {
                edata[currentFolderId].children.splice(selectedIndex, 1);
                delete edata[selectedItemId];
                setSelectedItemId(null);
            }
        } else {
            alert("No item selected to delete.");
        }
    };

    return (
        <section className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-4 text-uppercase fw-bold">File Explorer</h2>
                {folderStack.length > 0 && (
                    <button
                        onClick={handleBack}
                        className="btn btn-light shadow-sm mb-4 rounded-circle"
                    >
                        <i className="fa fa-arrow-left"></i>
                    </button>
                )}

                <div className="row mb-4">
                    <div className="col-4 d-flex flex-column align-items-center">
                        <div
                            className="box-container cursor-pointer border rounded-3 p-3 text-center"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <i className="fa fa-folder-plus text-primary"></i>
                            <span>Create Folder</span>
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center">
                        <label className="box-container cursor-pointer border rounded-3 p-3 text-center">
                            <i className="fa fa-upload text-success"></i>
                            <input
                                type="file"
                                multiple
                                onChange={handleFileUpload}
                                style={{ display: "none" }}
                            />
                            <span>Upload File</span>
                        </label>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center">
                        <div
                            className="box-container cursor-pointer border rounded-3 p-3 text-center"
                            onClick={handleDeleteItem}
                        >
                            <i className="fa fa-trash text-danger"></i>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {currentChildren.length > 0 ? (
                        currentChildren.map((child) => (
                            <div
                                className={`col-6 col-md-3 d-flex flex-column align-items-center mb-4 `}
                                key={child.id}
                                onClick={() => setSelectedItemId(child.id)}
                            >
                                <div
                                    className={`icon-container bg-${selectedItemId === child.id ? "light shadow-sm" : "white"} border rounded-3 d-flex justify-content-center align-items-center`}
                                    onDoubleClick={() => handleFolderClick(child)}
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <i
                                        className={`fa ${child.type === "folder"
                                                ? "fa-folder text-warning"
                                                : "fa-file text-danger"
                                            }`}
                                    ></i>
                                </div>
                                <span className="folder-name mt-2">{child.name}</span>
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
