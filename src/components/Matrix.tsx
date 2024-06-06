import { useEffect, useRef } from "react"

export const Matrix = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null)
  const pageLength = 4;

  useEffect(() => {
    let ctx: CanvasRenderingContext2D | null;
    const fontSize = 16;
    const alphabet = '01'
    const rainDrops: number[] = [];
    let columns: number;

    const setCanvasSize = () => {
      if (!canvasEl.current) return;
      canvasEl.current.width = window.innerWidth;
      canvasEl.current.height = pageLength * window.innerHeight;

      columns = canvasEl.current.width / fontSize;

      for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
      }
    }

    if (canvasEl.current) {
      ctx = canvasEl.current?.getContext('2d');
      setCanvasSize();
    }

    window.onresize = setCanvasSize;

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
    <canvas ref={canvasEl} className={`w-screen min-h-screen h-[${100 * pageLength}vh] lg:-ml-[15%] -ml-[5%] z-[-1] absolute`} />
  )
}
