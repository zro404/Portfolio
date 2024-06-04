import { useEffect, useRef } from "react"

export const Matrix = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null)
  const pageLength = 4;

  useEffect(() => {
    let ctx: CanvasRenderingContext2D | null;
    const fontSize = 16;
    const alphabet = '01'
    const rainDrops: number[] = [];
    if (canvasEl.current) {
      ctx = canvasEl.current?.getContext('2d');
      canvasEl.current.width = window.innerWidth;
      canvasEl.current.height = pageLength * window.innerHeight;

      const columns = canvasEl.current.width / fontSize;

      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }
    }

    const draw = () => {
      if (!ctx || !canvasEl.current) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvasEl.current.width, canvasEl.current.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvasEl.current.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };
    const id = setInterval(draw, 30)
    return () => clearInterval(id);
  }, []);

  return (
    <canvas ref={canvasEl} className={`w-screen min-h-screen h-[${100*pageLength}vh] -ml-[15%] z-[-1] absolute`} />
  )
}
