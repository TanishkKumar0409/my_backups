import React, { useState } from 'react';
import './App.css';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Set upload parameters
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }; // Mock URL for testing
  };

  // Handle file upload status changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta);
    if (status === 'done') {
      setUploadedFiles((prevFiles) => [...prevFiles, { name: meta.name, preview: meta.previewUrl }]);
    }
  };

  // Handle submission of all files
  const handleSubmit = (files, allFiles) => {
    console.log('Uploaded files:', files.map((f) => f.meta));
    alert('Upload Complete');
    allFiles.forEach((f) => f.remove());
    setUploadedFiles([]);
  };

  return (
    <div className="App">
      <h1>React Dropzone Uploader Example</h1>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,video/*"
        inputContent="Drag and drop files or click to upload"
        styles={{
          dropzone: { border: '2px dashed #007bff', borderRadius: '10px', padding: '20px' },
          dropzoneActive: { borderColor: 'green' },
          inputLabel: { color: '#007bff', fontWeight: 'bold' },
        }}
      />
      <div className="file-preview">
        <h2>Uploaded Files</h2>
        {uploadedFiles.length === 0 ? (
          <p>No files uploaded yet.</p>
        ) : (
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <strong>{file.name}</strong>
                {file.preview && (
                  <div>
                    <img src={file.preview} alt={file.name} style={{ width: '100px', height: 'auto', marginTop: '10px' }} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
