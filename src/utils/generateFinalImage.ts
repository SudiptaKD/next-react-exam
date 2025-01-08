export const generateFinalImage = (
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  logo: string | null,
  position: { x: number; y: number },
  size: { width: number; height: number }
) => {
  const canvas = canvasRef.current;
  if (!canvas) {
    console.error("Canvas element not found.");
    return;
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error("Failed to get 2D context.");
    return;
  }

  const tShirt = new Image();
  tShirt.src = '/tshirt.png';
  tShirt.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tShirt, 0, 0, canvas.width, canvas.height);
    if (logo) {
      const logoImg = new Image();
      logoImg.src = logo;
      logoImg.onload = () => {
        ctx.drawImage(logoImg, position.x, position.y, size.width, size.height);
        console.log(canvas.toDataURL('image/png'));
      };
    }
  };
};
