import React, { useEffect, useRef, forwardRef } from 'react';
import { Position } from './TShirtDesigner';

interface CanvasProps {
  tShirtImage: string;
  logo: string | null;
  logoPosition: Position;
  logoSize: number;
  onDrag: (x: number, y: number) => void;
  onResize: (size: number) => void;
}

const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ tShirtImage, logo, logoPosition, logoSize, onDrag, onResize }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const isDragging = useRef<boolean>(false);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) return;

      const tShirtImg = new Image();
      const logoImg = new Image();

      tShirtImg.src = tShirtImage;
      tShirtImg.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(tShirtImg, 0, 0, canvas.width, canvas.height);

        if (logo) {
          logoImg.src = logo;
          logoImg.onload = () => {
            ctx.drawImage(logoImg, logoPosition.x, logoPosition.y, logoSize, logoSize);
          };
        }
      };
    }, [tShirtImage, logo, logoPosition, logoSize]);

    const handleMouseDown = () => {
      isDragging.current = true;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (isDragging.current) {
        const rect = canvasRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left - logoSize / 2;
        const y = e.clientY - rect.top - logoSize / 2;
        onDrag(x, y);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
      const newSize = Math.max(10, logoSize - e.deltaY * 0.1);
      onResize(newSize);
    };

    return (
      <canvas
        ref={(el) => {
          canvasRef.current = el;
          if (ref && typeof ref === 'function') {
            ref(el);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLCanvasElement | null>).current = el;
          }
        }}
        width={500}
        height={600}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        style={{ border: '1px solid #ccc', cursor: 'move' }}
      />
    );
  }
);

Canvas.displayName = 'Canvas';

export default Canvas;
