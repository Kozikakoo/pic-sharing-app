"use client";
import {
  EventHandler,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import Tools from "../tools/tools";

type EventMouseAndTouch = MouseEvent | TouchEvent;

//export interface event extends MouseEvent, TouchEvent {}

const CanvasPaint = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState("black");
  const [drawWidth, setDrawWidth] = useState(2);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingActions, setDrawingActions] = useState([]);
  const [currentPath, setCurrentPath] = useState<
    [{ x: number; y: number }[] | { x: number; y: number }] | []
  >([]);
  const [context, setContext] = useState<null | CanvasRenderingContext2D>(null);
  const [currentStyle, setCurrentStyle] = useState({
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
        setContext(context);
        reDrawPreviousData(context);
      }
    }

    /* const canvas = document.getElementById("canvas-paint") as HTMLCanvasElement;
    if (canvas) {
      canvas.width = window.innerWidth - 60;
      canvas.height = 400;

      let context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        const start = (e: EventMouseAndTouch) => {
          setIsDrawing(true);
          if (context) {
            context.beginPath();
            if (e instanceof MouseEvent) {
              context.moveTo(
                e.clientX - canvas.offsetLeft,
                e.clientY - canvas.offsetTop
              );
            }

            e.preventDefault();
          }
        };

        const draw = (e: EventMouseAndTouch) => {
          if (isDrawing == true) {
            if (e instanceof MouseEvent) {
              context.lineTo(
                e.clientX - canvas.offsetLeft,
                e.clientY - canvas.offsetTop
              );
            } else if (e instanceof TouchEvent) {
              context.strokeStyle = color;
              context.lineWidth = drawWidth;
              context.lineCap = "round";
              context.lineJoin = "round";
              context.stroke();
            }
          }
          e.preventDefault();
        };

        const stop = (e: EventMouseAndTouch) => {
          if (isDrawing) {
            context.stroke();
            context.closePath();
            setIsDrawing(false);
          }
          e.preventDefault();
        };

        canvas.addEventListener("touchstart", start, false);
        canvas.addEventListener("touchmove", draw, false);
        canvas.addEventListener("mousedown", start, false);
        canvas.addEventListener("mousemove", draw, false);

        canvas.addEventListener("touchend", stop, false);
        canvas.addEventListener("mouseup", stop, false);
        canvas.addEventListener("mouseout", stop, false);
      }
    } */
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

  return (
    <>
      <canvas ref={canvasRef} id="canvas-paint"></canvas>
      <Tools range={drawWidth} />
    </>
  );
};

export default CanvasPaint;
