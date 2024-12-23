import React from "react";
import { toast } from "react-toastify";
import { noFileAPI } from "../../../../Services/API/API";

export default function ConfirmDeleteModal({
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    selectedItemId,
    setSelectedItemId,
    currentFolder,
    edata,
    setFolderData,
    username,
}) {
    if (!isDeleteModalOpen) return null;

    const handleDeleteItem = async () => {
        if (!selectedItemId) return toast("No item selected to delete.");

        try {
            const response = await noFileAPI.delete("/storage/folder/delete", {
                data: { username, folderId: selectedItemId },
            });

            const selectedIndex = currentFolder.children.indexOf(selectedItemId);
            if (selectedIndex !== -1) {
                currentFolder.children.splice(selectedIndex, 1);
                edata = edata.filter((item) => item.folderId !== selectedItemId);
                setFolderData([...edata]);
                setSelectedItemId(null);
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.error || "Error deleting item.");
        }

        setIsDeleteModalOpen(false);
    };

    const modalStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(5px)",
        zIndex: 1040,
    };

    return (
        <>
            <div className="modal-backdrop fade show" style={modalStyle} />
            <div
                className="modal fade show d-block"
                style={{ zIndex: 1050 }}
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Deletion</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setIsDeleteModalOpen(false)}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Are you sure you want to delete this item? This
                                action cannot be undone.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setIsDeleteModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleDeleteItem}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
