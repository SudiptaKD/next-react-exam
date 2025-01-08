import React from 'react';
import { CanvasProps } from '@/types';
import "../styles/Canvas.css"

const Canvas: React.FC<CanvasProps> = ({ canvasRef, onClick }) => (
  <canvas ref={canvasRef} width={500} height={500} className="canvas" onClick={onClick}></canvas>
);

export default Canvas;