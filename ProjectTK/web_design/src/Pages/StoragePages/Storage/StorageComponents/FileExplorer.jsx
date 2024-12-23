import React, { useEffect, useState } from "react";
import CreateFolderModal from "./ConfirmationModals/CreateFolderModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { noFileAPI } from "../../../../Services/API/API";
import { API } from "../../../../Services/API/API";
import { toast } from "react-toastify";

export default function FileExplorer({ username }) {
    const [folderData, setFolderData] = useState([]);
    const [currentFolderId, setCurrentFolderId] = useState(1);
    const [folderStack, setFolderStack] = useState([]);
    const [newFolderName, setNewFolderName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    // Fetch folder data when component mounts
    useEffect(() => {
        const getData = async () => {
            const response = await noFileAPI.get(`storage/folder/${username}`);
            setFolderData(response.data);
        };
        getData();
    }, [username]);  // Re-fetch data whenever the username changes or the page reloads


    const currentFolder = folderData.find((item) => item.folderId === currentFolderId);
    const currentChildren =
        currentFolder?.children.map((id) =>
            folderData.find((item) => item.folderId === id)
        ) || [];

    const handleFolderClick = (folder) => {
        setSelectedItemId(null);
        if (folder.type === "folder") {
            setFolderStack([...folderStack, currentFolderId]);
            setCurrentFolderId(folder.folderId);
        } else {
            toast(`You clicked on file: ${folder.root}`);
        }
    };

    const handleBack = () => {
        const previousFolderId = folderStack.pop();
        setCurrentFolderId(previousFolderId);
        setFolderStack([...folderStack]);
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file || !currentFolder) return toast("No valid folder or file selected.");

        const formData = new FormData();
        formData.append("parentId", currentFolderId);
        formData.append("file", file);

        try {
            const response = await API.post(`/storage/file/upload/${username}`, formData);
            const uploadedFile = response.data;
            folderData.push(uploadedFile);
            currentFolder.children.push(uploadedFile.id);
            setFolderData([...folderData]);
            setSelectedItemId(uploadedFile.id);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data?.error || "Error uploading file.");
        }

        event.target.value = "";
    };

    const handleDownload = (fileId) => {
        window.location.href = `http://localhost:5000/api/storage/file/download?username=${username}&folderId=${fileId}`;
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

                <div className="row mb-4 justify-content-center">
                    <div className="col-3 d-flex flex-column align-items-center">
                        <div className="box-container bg-white shadow-sm cursorPointer rounded-3 p-3 text-center" onClick={() => setIsModalOpen(true)} >
                            <i className="fa fa-folder-plus text-primary me-md-2"></i>
                            <span className="d-none d-md-inline-block">Create Folder</span>
                        </div>
                    </div>

                    <div className="col-3 d-flex flex-column align-items-center">
                        <label className="box-container bg-white shadow-sm cursorPointer rounded-3 p-3 text-center">
                            <i className="fa fa-upload text-success me-md-2"></i>
                            <input type="file" onChange={handleFileUpload} style={{ display: "none" }} />
                            <span className="d-none d-md-inline-block">Upload File</span>
                        </label>
                    </div>

                    <div className="col-3 d-flex flex-column align-items-center">
                        {selectedItemId && (
                            <div className="box-container bg-white shadow-sm cursorPointer rounded-3 p-3 text-center" onClick={() => setIsDeleteModalOpen(true)} >
                                <i className="fa fa-trash text-danger me-md-2"></i>
                                <span className="d-none d-md-inline-block">Delete</span>
                            </div>
                        )}
                    </div>

                    <div className="col-3 d-flex flex-column align-items-center">
                        {selectedItemId &&
                            folderData.find((item) => item.folderId === selectedItemId)?.type ===
                            "file" && (
                                <div className="box-container bg-white shadow-sm cursorPointer rounded-3 p-3 text-center" onClick={() => handleDownload(selectedItemId)}>
                                    <i className="fa fa-download text-info me-md-2"></i>
                                    <span className="d-none d-md-inline-block">Download</span>
                                </div>
                            )}
                    </div>
                </div>

                <div className="row">
                    {currentChildren.length > 0 ? (
                        currentChildren.map((child, index) => (
                            <div className="col-6 col-md-3 d-flex flex-column align-items-center mb-4" key={index}>
                                <div
                                    className={`icon-container cursorPointer ${selectedItemId === child.folderId ? "bg-light shadow" : "bg-white shadow-sm"} rounded-3 d-flex justify-content-center align-items-center`}
                                    onDoubleClick={() => handleFolderClick(child)}
                                    onClick={() => setSelectedItemId(child.folderId)}
                                    style={{ width: "100px", height: "100px", opacity: selectedItemId === child.folderId ? 1 : 0.7, }}
                                >
                                    <i className={`fa ${child.type === "folder" ? "fa-folder text-warning" : "fa-file text-danger"}`}></i>
                                </div>
                                <span className="folder-name mt-2">{child.root}</span>
                            </div>
                        ))
                    ) : (
                        <h5 className="text-center">{currentFolder ? "No items in this folder." : "Loading..."}</h5>
                    )}
                </div>

                <CreateFolderModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    newFolderName={newFolderName}
                    setNewFolderName={setNewFolderName}
                    currentFolderId={currentFolderId}
                    setFolderData={setFolderData}
                />

                <ConfirmDeleteModal
                    isDeleteModalOpen={isDeleteModalOpen}
                    setIsDeleteModalOpen={setIsDeleteModalOpen}
                    selectedItemId={selectedItemId}
                    setSelectedItemId={setSelectedItemId}
                    currentFolder={currentFolder}
                    folderData={folderData}
                    setFolderData={setFolderData}
                    username={username}
                />
            </div>
        </section>
    );
}
