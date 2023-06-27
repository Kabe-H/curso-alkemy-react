import { Typography } from "@mui/material";
import React from "react";

export default function Mostrar(props) {
  let a=props.nombre
  return (
    <div>
      <Typography variant="h3">Datos Ingresados</Typography>
      <Typography>El nombre es: {a}</Typography>
      <Typography>El mail es: {props.mail}</Typography>
    </div>
  );
}
