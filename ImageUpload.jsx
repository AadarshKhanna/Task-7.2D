import React, { useState, useRef, useEffect } from 'react';
import './ImageUpload.css';
import { storage } from './Firebase.js';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function ImageUpload({ onImageUpload }) {
  const [imageUpload, setImageUpload] = useState(null);  // State for the selected image to upload
  const fileInputRef = useRef(null);
  const [uploadPercentage, setUploadPercentage] = useState(0);  // State to track upload progress

  // Function to handle file input change
  const handleFileInputChange = () => {
    // Get the selected file and set it in state
    const selectedFile = fileInputRef.current.files[0];
    setImageUpload(selectedFile);
  };

  // Function to upload the selected image
  const uploadImage = async () => {
    if (imageUpload === null) return;

    // Creating a reference to the storage location for the image
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    const uploadTask = uploadBytesResumable(imageRef, imageUpload);

    uploadTask.on("state_changed", (snapshot) => {
      // Calculate and log the upload percentage
      const percentVal = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      console.log(percentVal);
      setUploadPercentage(percentVal);
    }, (error) => {
      console.error(error);
    }, async () => {
      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      alert("Image Uploaded");
      console.log(downloadURL);

      // Pass the download URL to the parent component
      onImageUpload(downloadURL);
    });
  };

  // Render the image upload form
  return (
    <div className="image-upload-container">
      <div className="image-upload" style={{ marginRight: '40px' }}>

        <label htmlFor="imageUpload" className="imagealign">        {/* Label for the file input */}
          Add an Image:
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/png, image/jpeg"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        {/* Progress bar */}
        <div className="bar">
          <div className="progress" style={{ width: `${uploadPercentage}%` }}></div>
        </div>
        {/* Browse button */}
        <label htmlFor="imageUpload" className="upload custom-file-input" style={{ color: 'white', height: "35px", marginTop: "0px", textAlign: "center", display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          Browse
        </label>
        {/* Upload button */}
        <button onClick={uploadImage} className="upload custom-file-input">
          Upload
        </button>
      </div>
      {/* Display upload percentage */}
      <div className="uploadPercentage" style={{ marginTop: '-10px', marginBottom: '-20px' }}>{uploadPercentage}%</div>
    </div>
  );
}

export default ImageUpload;
