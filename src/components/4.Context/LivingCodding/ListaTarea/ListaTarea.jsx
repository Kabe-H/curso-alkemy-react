import React, { useContext } from "react";
import { contextoListaTareas } from "../GeneralTarea/GeneralTarea";
import { Table,TableHead,TableRow, TableBody, TableCell, TableContainer } from "@mui/material";

export default function ListaTarea() {
  const tareas = useContext(contextoListaTareas);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>N°</TableCell>
              <TableCell>Tarea</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tareas.map((tarea) => (
              <TableRow key={tarea.id}>
                <TableCell>{tarea.id}</TableCell>
                <TableCell>{tarea.tarea}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
