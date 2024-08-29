// цвета, фон, размер
"use client";

import { PaintColor, PaintWidth } from "@/lib/type";
import React, { createContext, useContext, useState } from "react";

type PaintStylesContextProviderProps = {
  children: React.ReactNode;
};

type PaintStylesContextType = {
  paintColor: PaintColor;
  setPaintColor: React.Dispatch<React.SetStateAction<PaintColor>>;
  width: PaintWidth;
  setWidth: React.Dispatch<React.SetStateAction<PaintWidth>>;
  backgroundColor: PaintColor;
  setBackgroundColor: React.Dispatch<React.SetStateAction<PaintColor>>;
};

export const PaintStylesContext = createContext<PaintStylesContextType | null>(
  null
);

export default function PaintStylesContextProvider({
  children,
}: PaintStylesContextProviderProps) {
  const [paintColor, setPaintColor] = useState<PaintColor>("#000000");
  const [width, setWidth] = useState<PaintWidth>(2);
  const [backgroundColor, setBackgroundColor] = useState<PaintColor>("#ffffff");

  return (
    <PaintStylesContext.Provider
      value={{
        paintColor,
        setPaintColor,
        width,
        setWidth,
        backgroundColor,
        setBackgroundColor,
      }}
    >
      {children}
    </PaintStylesContext.Provider>
  );
}

export function usePaintStylesContext() {
  const context = useContext(PaintStylesContext);

  if (context === null) {
    throw new Error(
      "usePaintStylesContext must be used within an PaintStylesContextProvider"
    );
  }

  return context;
}
