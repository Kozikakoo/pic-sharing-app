"use client";

import React, { createContext, useContext, useState } from "react";

type OpenPopupContextProviderProps = {
  children: React.ReactNode;
};

type OpenPopupContextType = {
  isOpenPopup: boolean;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OpenPopupContext = createContext<OpenPopupContextType | null>(
  null
);

export default function OpenPopupContextProvider({
  children,
}: OpenPopupContextProviderProps) {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  return (
    <OpenPopupContext.Provider
      value={{
        isOpenPopup,
        setIsOpenPopup,
      }}
    >
      {children}
    </OpenPopupContext.Provider>
  );
}

export function useOpenPopupContext() {
  const context = useContext(OpenPopupContext);

  if (context === null) {
    throw new Error(
      "useActiveComponentContext must be used within an ActiveComponentContextProvider"
    );
  }

  return context;
}
