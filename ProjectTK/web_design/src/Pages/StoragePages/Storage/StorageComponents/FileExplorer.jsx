import React, { useEffect, useState } from "react";
import CreateFolderModal from "./ConfirmationModals/CreateFolderModal";
import ConfirmDeleteModal from "./ConfirmationModals/ConfirmDeleteModal";
import { noFileAPI } from "../../../../Services/API/API";
import { API } from "../../../../Services/API/API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function FileExplorer({ username }) {
    const [folderData, setFolderData] = useState([]);
    const [currentFolderId, setCurrentFolderId] = useState(1);
    const [folderStack, setFolderStack] = useState([]);
    const [newFolderName, setNewFolderName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const redirector = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const response = await noFileAPI.get(`storage/folder/${username}`);
            setFolderData(response.data);
        };
        getData();
    }, [username]);

    const currentFolder = folderData.find((item) => item.folderId === currentFolderId);
    const currentChildren =
        currentFolder?.children.map((id) =>
            folderData.find((item) => item.folderId === id)
        ) || [];

    const handleFolderClick = async (folder) => {
        setSelectedItemId(null);
        if (folder.type === "folder") {
            setFolderStack([...folderStack, currentFolderId]);
            setCurrentFolderId(folder.folderId);
        } else {
            const recentData = {
                username,
                folderId: selectedItemId
            };

            if (recentData) {
                try {
                    const recentResponse = await noFileAPI.post("/storage/recent", recentData);
                    console.log(recentResponse.data.message);
                } catch (error) {
                    console.log(error.response.data.error);
                }

                redirector(`/main/file/view/${selectedItemId}`);
            }
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
            setSelectedItemId(uploadedFile.id);

            const updatedData = await noFileAPI.get(`storage/folder/${username}`);
            setFolderData(updatedData.data);

            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data?.error || "Error uploading file.");
        }

        event.target.value = "";
    };

    const handleDownload = (fileId) => {
        const APIurl = process.env.REACT_APP_API;
        window.location.href = `${APIurl}api/storage/file/download?username=${username}&folderId=${fileId}`;
    };

    const getFileIcon = (fileName) => {
        if (!fileName) return 'fa-file text-info';
        const extension = fileName.split('.').pop().toLowerCase();
        switch (extension) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return 'fa-image text-success';
            case 'pdf':
                return 'fa-file-pdf text-danger';
            case 'doc':
            case 'docx':
                return 'fa-file-word text-primary';
            case 'xls':
            case 'xlsx':
                return 'fa-file-excel text-success';
            case 'ppt':
            case 'pptx':
                return 'fa-file-powerpoint text-warning';
            case 'txt':
                return 'fa-file-alt text-muted';
            case 'zip':
            case 'rar':
                return 'fa-file-archive text-secondary';
            case 'mkv':
                return 'fa-file-video';
            case 'mp3':
            case 'wav':
            case 'ogg':
            case 'flac':
                return 'fa-file-audio text-info';
            default:
                return 'fa-file text-info';
        }
    };

    let touchCounter = 0;
    let touchTimeout;

    const handleTouchStart = (e, folder) => {

        touchCounter += 1;

        if (touchCounter === 2) {
            clearTimeout(touchTimeout);
            handleFolderClick(folder);
            touchCounter = 0;
        } else {
            touchTimeout = setTimeout(() => {
                touchCounter = 0;
            }, 500);
        }
    };


    return (
        <section className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": `'${username} Files'` }}>{username} Files</h2>

                <button onClick={handleBack} className="btn btn-light shadow-sm mb-4 rounded-circle" disabled={folderStack.length === 0}>
                    <i className="fa fa-arrow-left"></i>
                </button>

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
                                    onTouchStart={(e) => handleTouchStart(e, child)}
                                    onClick={() => setSelectedItemId(child.folderId)}
                                    style={{ width: "100px", height: "100px", opacity: selectedItemId === child.folderId ? 1 : 0.7, }}
                                >
                                    <i style={{ fontSize: "5rem" }} className={`fa fw-bold ${child.type === "folder" ? "fa-folder text-warning" : getFileIcon(child?.root)}`}></i>
                                </div>
                                <span className="folder-name mt-2 truncated-file-name" >{child.root}</span>
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
