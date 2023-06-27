import React, { useMemo } from "react";
import ListaTarea from "../ListaTarea/ListaTarea";

export const contextoListaTareas = React.createContext();

export default function GeneralTarea() {
  const tareas = useMemo(
    () => [
      { id: 1, tarea: "Hacer la compra" },
      { id: 2, tarea: "Hacer ejercicio" },
      { id: 3, tarea: "Estudiar" },
    ],
    []
  );

  return (
    <contextoListaTareas.Provider value={tareas}>
      <ListaTarea />
    </contextoListaTareas.Provider>
  );
}
