import React from 'react';
import { LogoUploaderProps } from '@/types';

const LogoUploader: React.FC<LogoUploaderProps> = ({ onUpload }) => (
  <input type="file" accept="image/*" onChange={(e) => onUpload(e.target.files![0])} />
);

export default LogoUploader;