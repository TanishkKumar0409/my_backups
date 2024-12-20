import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateFolderModal from './CreateFolderModal';

export default function FileExplorer({ folderData }) {
    const [currentFolder, setCurrentFolder] = useState(folderData)
    const [folderStack, setFolderStack] = useState([])
    const [newFolderName, setNewFolderName] = useState("")
    const redirector = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleFolderClick = (folder) => {
        setFolderStack([...folderStack, currentFolder])
        setCurrentFolder(folder)
    }

    const handleBack = () => {
        const previousFolder = folderStack.pop()
        setCurrentFolder(previousFolder)
        setFolderStack([...folderStack])
    }

    const handleFileClick = (file) => {
        redirector("/file-preview", { state: { file } })
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
            const newFile = {
                name: file.name,
                type: 'file',
                size: file.size,
            }
            setCurrentFolder(prev => ({
                ...prev,
                children: [...prev.children, newFile]
            }))
        }
    }

    const handleCreateFolder = () => {
        if (newFolderName.trim()) {
            const newFolder = {
                name: newFolderName,
                type: 'folder',
                children: []
            }
            setCurrentFolder(prev => ({
                ...prev,
                children: [...prev.children, newFolder]
            }))
            setNewFolderName("")
            setIsModalOpen(false)
        }
    }

    return (
        <>
            <section className='bg-light py-5'>
                <div className="container">
                    <div className="row">
                        <h2 className="text-center mb-4 mainHeading text-uppercase fw-bold" style={{ "--text": "'Storage'" }}>Storage</h2>
                        <p className="px-5 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea eveniet tempora, eius cumque necessitatibus nihil.</p>
                    </div>
                    {folderStack.length > 0 && (
                        <button onClick={handleBack} className="btn btn-light shadow-sm mb-4 rounded-circle">
                            <i className="fa fa-arrow-left"></i>
                        </button>
                    )}

                    <div className="row mb-4">
                        <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                            <div
                                className="box-container cursorPointer bg-white border rounded-3 p-3 text-center"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <div className="icon-container">
                                    <span className="create-icon">
                                        <i className="fa fa-folder-plus text-primary"></i>
                                    </span>
                                </div>
                                <span className="box-text">Create Folder</span>
                            </div>
                        </div>

                        <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                            <div
                                className="box-container bg-white cursorPointer border rounded-3 p-3 text-center"
                                onClick={() => document.getElementById('fileInput').click()}
                            >
                                <div className="icon-container">
                                    <span className="upload-icon">
                                        <i className="fa fa-cloud-upload-alt text-success"></i>
                                    </span>
                                </div>
                                <span className="box-text">Upload File</span>
                                <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} id="fileInput" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {currentFolder?.type === "folder" && currentFolder?.children?.length > 0 ? (
                            currentFolder?.children?.map((childrenData, index) => (
                                <div className="col-6 col-md-3 d-flex flex-column align-items-center mb-4" key={index}>
                                    <div
                                        className="icon-container bg-white border rounded-3 d-flex justify-content-center align-items-center"
                                        onClick={() =>
                                            childrenData.type === "folder"
                                                ? handleFolderClick(childrenData)
                                                : handleFileClick(childrenData)
                                        } style={{ width: "100px", height: "100px", }}>
                                        {childrenData.type === "folder" ? (
                                            <i className="fa fa-folder text-warning"></i>
                                        ) : (
                                            <i className="fa fa-file-alt text-info"></i>
                                        )}
                                    </div>
                                    <span className="folder-name mt-2" style={{ textAlign: "center" }}>
                                        {childrenData.name}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <h5>{currentFolder.type === "file" ? "File" : "Folder"}: <span>{currentFolder.name}</span></h5>
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
        </>
    )
}
