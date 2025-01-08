import React, { useRef, useState } from 'react';
import Canvas from './Canvas';
import LogoUploader from './LogoUploader';
import Resizer from './Resizer';
import { generateFinalImage } from '@/utils/generateFinalImage'; 
import "../styles/TShirtDesigner.css"

const TShirtDesigner: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Allow null
  const [logo, setLogo] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 100, height: 100 });

  const handleDrag = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setPosition({
      x: e.nativeEvent.offsetX - size.width / 2,
      y: e.nativeEvent.offsetY - size.height / 2,
    });
  };

  return (
    <div>
      <Canvas canvasRef={canvasRef} onClick={handleDrag} />
      <LogoUploader onUpload={(file) => setLogo(URL.createObjectURL(file))} />
      <Resizer onResize={(scale) => setSize({ width: 100 * scale, height: 100 * scale })} />
      <button onClick={() => generateFinalImage(canvasRef, logo, position, size)}>Generate Final Image</button>
    </div>
  );
};
export default TShirtDesigner;
