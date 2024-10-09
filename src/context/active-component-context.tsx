// цвета, фон, размер
"use client";

import { ActiveColorButton, ActivePalette } from "@/lib/type";
import React, { createContext, useContext, useState } from "react";

type ActiveComponentContextProviderProps = {
  children: React.ReactNode;
};

type ActiveComponentContextType = {
  activePalette: ActivePalette;
  setActivePalette: React.Dispatch<React.SetStateAction<ActivePalette>>;
  activeColorButton: ActiveColorButton;
  setActiveColorButton: React.Dispatch<React.SetStateAction<ActiveColorButton>>;
};

export const ActiveComponentContext =
  createContext<ActiveComponentContextType | null>(null);

export default function ActiveComponentContextProvider({
  children,
}: ActiveComponentContextProviderProps) {
  const [activePalette, setActivePalette] = useState<ActivePalette>(null);
  const [activeColorButton, setActiveColorButton] =
    useState<ActiveColorButton>("pen");
  return (
    <ActiveComponentContext.Provider
      value={{
        activePalette,
        setActivePalette,
        activeColorButton,
        setActiveColorButton,
      }}
    >
      {children}
    </ActiveComponentContext.Provider>
  );
}

export function useActiveComponentContext() {
  const context = useContext(ActiveComponentContext);

  if (context === null) {
    throw new Error(
      "useActiveComponentContext must be used within an ActiveComponentContextProvider"
    );
  }

  return context;
}
