"use client";
import { usePaintStylesContext } from "@/context/paint-styles-context";
import { PaintWidth } from "@/lib/type";
import { useRef } from "react";

const RangeWidth = () => {
  const rangeRef = useRef<HTMLInputElement>(null);
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

  const changeWidth = () => {
    if (rangeRef.current) {
      setWidth(Number(rangeRef.current.value) as PaintWidth);
      setCurrentStyle({
        ...currentStyle,
        width: Number(rangeRef.current.value) as PaintWidth,
      });
    }
  };

  return (
    <div>
      <input
        defaultValue="2"
        ref={rangeRef}
        type="range"
        min="2"
        max="8"
        step="2"
        onChange={changeWidth}
      />
    </div>
  );
};

export default RangeWidth;
