import { Button, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

export default function Nombre() {
  const [contador, setContador] = useState(0);
  const nombre = useRef("Juan");

  const cambiarNombre = () => {
    nombre.current = "Clara";
    console.log(`El nombre es ${nombre.current}`);
  };

  return (
    <div>
      <Typography>{contador}</Typography>
      <Button onClick={() => setContador(contador + 1)}>Aumentar</Button>
      <br />
      <Typography>{nombre.current}</Typography>
      <Button onClick={cambiarNombre}>Cambiar Nombre</Button>
    </div>
  );
}
