//Componente NotaProvider
import React, { useRef } from "react";

export const NoteContext = React.createContext();

export default function NotaProvider({ children }) {
  const countRef = useRef(0);

  const incrementCount = () => {
    countRef.current += 1;
  };

  const resetCount = () => {
    countRef.current = 0;
  };

  return (
    <NoteContext.Provider value={{ countRef, incrementCount, resetCount }}>
      {children}
    </NoteContext.Provider>
  );
}
