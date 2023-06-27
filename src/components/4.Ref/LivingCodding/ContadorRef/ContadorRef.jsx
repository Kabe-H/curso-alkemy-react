import { Typography,Button } from "@mui/material";
import React, { useRef, useState } from "react";

export default function ContadorRef() {
  const [contador, setContador] = useState();
  const [prueba, setPrueba] = useState(true);
  const counterRef = useRef(0);

  const reiniciar = () => {
    counterRef.current = 0;
    setContador(counterRef.current);
  };

  const incrementar = () => {
    counterRef.current += 1;
  };

  const cambiarPrueba = () => {
    setPrueba(!prueba);
  };
  return (
    <div>
      <Typography>{contador}</Typography>
      <Typography>{counterRef.current}</Typography>
      <Button onClick={incrementar}>incrementar</Button>
      <Button onClick={reiniciar}>reiniciar</Button>
      <Button onClick={cambiarPrueba}>Prueba</Button>
    </div>
  );
}
