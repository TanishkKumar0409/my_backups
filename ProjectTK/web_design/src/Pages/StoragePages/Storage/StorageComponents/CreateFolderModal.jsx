import React from 'react';
import { toast } from 'react-toastify';
import { noFileAPI } from '../../../../Services/API/API';

export default function CreateFolderModal({ isModalOpen, setIsModalOpen, newFolderName, setNewFolderName, currentFolderId, username, setFolderData }) {
    if (!isModalOpen) return null;

    const handleCreateFolder = async () => {
        if (!newFolderName.trim()) return;
        try {
            const response = await noFileAPI.post("/storage/folder/create", {
                username, root: newFolderName, parentId: currentFolderId
            });
            setFolderData(prevData => [...prevData, response.data.savedFolder]);
            setNewFolderName("");
            setIsModalOpen(false);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        zIndex: 1040,
    }

    return (
        <>
            <div className="modal-backdrop fade show" style={modalStyle} />
            <div className="modal fade show d-block" style={{ zIndex: 1050 }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create New Folder</h5>
                            <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Folder Name"
                                value={newFolderName}
                                onChange={(e) => setNewFolderName(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleCreateFolder}>
                                Create Folder
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
