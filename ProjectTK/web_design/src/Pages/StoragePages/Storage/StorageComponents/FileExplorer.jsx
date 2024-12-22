import React, { useState } from "react";
import CreateFolderModal from "./CreateFolderModal";
import { API, noFileAPI } from "../../../../Services/API/API";
import { toast } from "react-toastify";

export default function FileExplorer({ edata, setFolderData, username }) {
    const [currentFolderId, setCurrentFolderId] = useState(1);
    const [folderStack, setFolderStack] = useState([]);
    const [newFolderName, setNewFolderName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const currentFolder = edata.find(item => item.folderId === currentFolderId);
    const currentChildren = currentFolder?.children.map(id => edata.find(item => item.folderId === id)) || [];

    const handleFolderClick = (folder) => {

        setSelectedItemId(folder.folderId);

        if (folder.type === "folder") {
            setFolderStack([...folderStack, currentFolderId]);
            setCurrentFolderId(folder.folderId);
        } else {
            toast(`You clicked on file: ${folder.name}`);
        }
    };

    const handleBack = () => {
        const previousFolderId = folderStack.pop();
        setCurrentFolderId(previousFolderId);
        setFolderStack([...folderStack]);
    };

    const handleCreateFolder = async () => {
        if (newFolderName.trim()) {
            const newFolderData = {
                username: username,
                root: newFolderName,
                parentId: currentFolderId,
            };

            try {
                const response = await noFileAPI.post(
                    "/storage/folder/create",
                    newFolderData
                );

                const newFolder = response.data.savedFolder;

                setFolderData((prevData) => [...prevData, newFolder]);
                setNewFolderName("");
                setIsModalOpen(false);

                toast.success(response.data.message)

                window.location.reload();
            } catch (error) {
                toast.error(error.response.data.error)
            }
        }
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];

        if (file && currentFolder) {
            const formData = new FormData();
            formData.append("parentId", currentFolderId);
            formData.append("file", file);

            try {
                const response = await API.post(`/storage/file/upload/${username}`, formData);

                const uploadedFile = response.data;

                edata.push(uploadedFile);
                currentFolder.children.push(uploadedFile.id);

                setFolderData([...edata]);
                setSelectedItemId(uploadedFile.id);

                toast.success(response.data.message)
            } catch (error) {
                toast.error(error.response.data.error)
            }
        } else {
            toast("No valid folder selected or no file selected.");
        }

        event.target.value = "";
    };

    const handleDeleteItem = async () => {
        if (selectedItemId) {
            try {
                const deleteObj = {
                    username: username,
                    folderId: selectedItemId,
                };

                const response = await noFileAPI.delete("/storage/folder/delete", {
                    data: deleteObj,
                });

                if (response.status === 200) {
                    const selectedIndex = currentFolder.children.indexOf(selectedItemId);
                    if (selectedIndex !== -1) {
                        currentFolder.children.splice(selectedIndex, 1);

                        edata = edata.filter((item) => item.folderId !== selectedItemId);

                        setFolderData([...edata]);
                        setSelectedItemId(null);
                    }

                    toast.success(response.data.message);
                }
            } catch (error) {
                toast.error(error.response.data.error)
            }
        } else {
            toast("No item selected to delete.");
        }
    };

    const handleDownload = async (fileId) => {
        try {
            window.location.href = `http://localhost:5000/api/storage/file/download?username=${username}&folderId=${fileId}`
        } catch (error) {
            toast.error(error.response.data.error)
        }
    }

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

                <div className="row mb-4 justify-content-center">
                    <div className="col-3 d-flex flex-column align-items-center">
                        <div
                            className="box-container cursorPointer border rounded-3 p-3 text-center"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <i className="fa fa-folder-plus text-primary me-md-2"></i>
                            <span className="d-none d-md-inline-block">Create Folder</span>
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-column align-items-center">
                        <label className="box-container cursorPointer border rounded-3 p-3 text-center">
                            <i className="fa fa-upload text-success me-md-2"></i>
                            <input
                                type="file"
                                onChange={handleFileUpload}
                                style={{ display: "none" }}
                            />
                            <span className="d-none d-md-inline-block">Upload File</span>
                        </label>
                    </div>
                    <div className="col-3 d-flex flex-column align-items-center">
                        <div
                            className={`box-container cursorPointer border rounded-3 p-3 text-center ${selectedItemId ? "" : "d-none"}`}
                            onClick={handleDeleteItem}
                        >
                            <i className="fa fa-trash text-danger me-md-2"></i>
                            <span className="d-none d-md-inline-block">Delete</span>
                        </div>
                    </div>
                    <div className="col-3 d-flex flex-column align-items-center">
                        {selectedItemId && edata.find(item => item.folderId === selectedItemId)?.type === "file" && (
                            <div
                                className="box-container cursorPointer border rounded-3 p-3 text-center"
                                onClick={() => handleDownload(selectedItemId)}
                            >
                                <i className="fa fa-download text-info me-md-2"></i>
                                <span className="d-none d-md-inline-block">Download</span>
                            </div>
                        )}
                    </div>
                </div>



                <div className="row">
                    {currentChildren.length > 0 ? (
                        currentChildren.map((child, index) => (
                            <div
                                className={`col-6 col-md-3 d-flex flex-column align-items-center mb-4`}
                                key={index}
                                onClick={() => setSelectedItemId(child.folderId)}
                            >

                                <div
                                    className={`icon-container bg-${selectedItemId === child.folderId ? "light shadow-sm" : "white"} border rounded-3 d-flex justify-content-center align-items-center`}
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
                                            }`}></i>
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
