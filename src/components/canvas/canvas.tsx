"use client";
import { EventHandler, useEffect, useRef, useState } from "react";
import Tools from "../tools/tools";

const CanvasPaint = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("black");
  const [drawWidth, setDrawWidth] = useState(2);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingActions, setDrawingActions] = useState<
    { path: typeof currentPath; style: typeof currentStyle }[] | []
  >([]);
  const [currentPath, setCurrentPath] = useState<
    { x: number; y: number }[] | []
  >([]);
  const [context, setContext] = useState<null | CanvasRenderingContext2D>(null);
  const [currentStyle, setCurrentStyle] = useState<{
    color: string;
    lineWidth: number;
  }>({
    color: "black",
    lineWidth: 3,
  });

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      if (canvas instanceof HTMLCanvasElement) {
        canvas.width = window.innerWidth - 60;
        canvas.height = 400;

        let context = canvas.getContext("2d");
        if (context instanceof CanvasRenderingContext2D) {
          setContext(context);
          reDrawPreviousData(context);
        }
      }
    }
  }, []);

  const start = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (context) {
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);

      e.preventDefault();
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    if (context) {
      context.strokeStyle = currentStyle.color;
      context.lineWidth = currentStyle.lineWidth;
      context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.stroke();
      setCurrentPath([
        ...currentPath,
        { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
      ]);
    }
    e.preventDefault();
  };

  const end = () => {
    setIsDrawing(false);
    context && context.closePath();
    if (currentPath.length > 0) {
      setDrawingActions([
        ...drawingActions,
        { path: currentPath, style: currentStyle },
      ]);
    }
    setCurrentPath([]);
  };

  const changeColor = (color: string) => {
    setColor(color);
    setCurrentStyle({ ...currentStyle, color });
  };

  const changeWidth = (lineWidth: number) => {
    setDrawWidth(lineWidth);
    setCurrentStyle({ ...currentStyle, lineWidth });
  };

  const undoDrawing = () => {
    if (drawingActions.length > 0) {
      drawingActions.pop();
      if (canvasRef.current) {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const newContext = canvas.getContext("2d");
        newContext?.clearRect(0, 0, canvas.width, canvas.height);

        drawingActions.forEach(({ path, style }) => {
          if (newContext) {
            newContext.beginPath();
            newContext.strokeStyle = style.color;
            newContext.lineWidth = style.lineWidth;
            newContext.moveTo(path[0].x, path[0].y);
            path.forEach((point) => {
              newContext.lineTo(point.x, point.y);
            });
            newContext.stroke();
          }
        });
      }
    }
  };

  const clearDrawing = () => {
    setDrawingActions([]);
    setCurrentPath([]);
    if (canvasRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const newContext = canvas.getContext("2d");
      newContext?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const reDrawPreviousData = (ctx: CanvasRenderingContext2D) => {
    drawingActions.forEach(({ path, style }) => {
      ctx.beginPath();
      ctx.strokeStyle = style.color;
      ctx.lineWidth = style.lineWidth;
      ctx.moveTo(path[0].x, path[0].y);
      path.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    });
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        id="canvas-paint"
        onMouseDown={start}
        onMouseMove={draw}
        onMouseUp={end}
        onMouseOut={end}
      ></canvas>
      <Tools range={drawWidth} />
    </>
  );
};

export default CanvasPaint;
