"use client";
import { useEffect, useRef, useState } from "react";
import Tools from "../tools/tools";
import styles from "./canvas.module.scss";
import { usePaintStylesContext } from "@/context/paint-styles-context";
import { PaintColor, PaintWidth } from "@/lib/type";
import Button from "../button/button";

const CanvasPaint = () => {
  const {
    paintColor,
    setPaintColor,
    width,
    setWidth,
    backgroundColor,
    setBackgroundColor,
    currentStyle,
    setCurrentStyle,
  } = usePaintStylesContext();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingActions, setDrawingActions] = useState<
    { path: typeof currentPath; style: typeof currentStyle }[] | []
  >([]);
  const [currentPath, setCurrentPath] = useState<
    { x: number; y: number }[] | []
  >([]);
  const [context, setContext] = useState<null | CanvasRenderingContext2D>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      if (canvas instanceof HTMLCanvasElement) {
        canvas.width = 635;
        canvas.height = 538;

        let context = canvas.getContext("2d");
        if (context instanceof CanvasRenderingContext2D) {
          setContext(context);
          reDrawPreviousData(context);
        }
      }
    }
  }, []);

  useEffect(() => {
    let cursor = document.getElementById("cursor");
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.pageX - width / 2}px`; // Центрируем круг по ширине
      cursor.style.top = `${e.pageY - width / 2}px`; // Центрируем круг по высоте
      cursor.style.width = `${width}px`; // Устанавливаем ширину круга в зависимости от выбора пользователя
      cursor.style.height = `${width}px`; // Устанавливаем высоту круга в зависимости от выбора пользователя
      cursor.style.backgroundColor = paintColor;
    };

    document.addEventListener("mousemove", updateCursor);
    return () => document.removeEventListener("mousemove", updateCursor);
  }, [width, paintColor]);

  const start = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (context) {
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);

      //e.preventDefault();
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;
    context.strokeStyle = currentStyle.color;
    context.lineWidth = currentStyle.width;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
    setCurrentPath([
      ...currentPath,
      { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
    ]);

    //e.preventDefault();
  };

  const end = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    context?.closePath();
    if (currentPath.length > 0) {
      setDrawingActions([
        ...drawingActions,
        { path: currentPath, style: currentStyle },
      ]);
    }
    setCurrentPath([]);
  };

  const undoDrawing = () => {
    if (drawingActions.length > 0) {
      drawingActions.pop();
      clearCanvas();
      drawingActions.forEach(({ path, style }) => drawPath(path, style));
    }
  };

  const clearDrawing = () => {
    setDrawingActions([]);
    setCurrentPath([]);
    clearCanvas();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (canvas) {
      const newContext = canvas.getContext("2d");
      newContext?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const reDrawPreviousData = (ctx: CanvasRenderingContext2D) => {
    drawingActions.forEach(({ path, style }) => drawPath(path, style, ctx));
  };

  const drawPath = (
    path: { x: number; y: number }[],
    style: { color: PaintColor; width: PaintWidth },
    ctx = context
  ) => {
    if (!ctx || path.length === 0) return;
    ctx.beginPath();
    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.moveTo(path[0].x, path[0].y);
    path.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.stroke();
  };

  const changeBackgroundCanvas = (color: PaintColor) => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (canvas) {
      canvas.style.backgroundColor = color;
    }
  };

  return (
    <div className={styles.paintBlock}>
      <div id="cursor" className={styles.cursor}></div>
      <canvas
        width={635}
        height={538}
        className={styles.canvas}
        ref={canvasRef}
        id="canvas-paint"
        onMouseDown={start}
        onMouseMove={draw}
        onMouseUp={end}
        onMouseOut={end}
      ></canvas>
      <div className={styles.toolsWithButton}>
        <Tools
          undoDrawing={undoDrawing}
          clearDrawing={clearDrawing}
          changeBackgroundCanvas={(color: PaintColor) =>
            changeBackgroundCanvas(color)
          }
        />
        <Button color="orange" text="Сохранить" className={styles.saveButton} />
      </div>
    </div>
  );
};

export default CanvasPaint;
