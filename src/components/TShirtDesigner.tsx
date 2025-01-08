import React, { useRef, useState } from 'react';
import Canvas from './Canvas';
import FileUpload from './FileUpload';
import ControlPanel from './ControlPanel';

export interface Position {
  x: number;
  y: number;
}

const TShirtDesigner: React.FC = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const [logoPosition, setLogoPosition] = useState<Position>({ x: 100, y: 100 });
  const [logoSize, setLogoSize] = useState<number>(100); // in pixels
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (file: File) => {
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleDrag = (x: number, y: number) => {
    setLogoPosition({ x, y });
  };

  const handleResize = (size: number) => {
    setLogoSize(size);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'tshirt-design.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-2">
      <div className="shadow-lg bg-white rounded-lg p-2 w-full max-w-5xl flex">
        <div className="flex-1 p-4">
          <Canvas
            ref={canvasRef}
            tShirtImage="/tshirt.png"
            logo={logo}
            logoPosition={logoPosition}
            logoSize={logoSize}
            onDrag={handleDrag}
            onResize={handleResize}
          />
        </div>

        <div className="flex flex-col w-1/3 p-4 space-y-4">
          <div className="flex-1 border border-gray-300 rounded-lg p-4">
            <FileUpload onFileChange={handleFileChange} />
          </div>

          <div className="flex-1 mt-4  rounded-lg ">
            <ControlPanel onDownload={handleDownload} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default TShirtDesigner;
