import React, { useState } from 'react';
import Image from './Image';

interface FileUploadProps {
  onFileChange: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileChange(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onFileChange(null as any);
  };

  return (
    <div className="file-upload">
      {preview ? (
        <div className="preview-container">
          <Image src={preview} alt="Preview" className="preview-image" />
          <button className="remove-button" onClick={handleRemove}>
            Remove
          </button>
        </div>
      ) : (
        <label className="upload-label">
          <input type="file" accept="image/*" onChange={handleChange} />
          <span className="upload-text">Upload Logo</span>
        </label>
      )}
    </div>
  );
};

export default FileUpload;
