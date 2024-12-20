import React from 'react';

export default function CreateFolderModal({ isModalOpen, setIsModalOpen, newFolderName, setNewFolderName, handleCreateFolder }) {
    if (!isModalOpen) return null; // Return null if modal is closed

    return (
        <>
            {/* Dark overlay with blur */}
            <div
                className="modal-backdrop fade show"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 1040,
                }}
            />
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
