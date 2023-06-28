//Componente crearNota
import { Button, TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { NoteContext } from "../NotaProvider/NotaProvider";

export default function CrearNotas() {
  const [notas, setNotas] = useState([]);
  const [nota, setNota] = useState([]);
  const { incrementCount } = useContext(NoteContext);
  const { countRef } = useContext(NoteContext);

  const onChangeNota = (e) => {
    setNota(e.target.value);
  };

  const onClickAgregarNota = () => {
    if (nota != "") {
      setNotas([...notas, nota]);
      setNota("");
      incrementCount();
    } else {
      console.log("nota vacia");
    }
  };

  return (
    <>
      <Typography>Total de notas creadas: {countRef.current}</Typography>
      <TextField label="Notas" onChange={onChangeNota} value={nota} />
      <Button onClick={onClickAgregarNota}>Agregar Nota</Button>
      {notas.map((nota, index) => (
        <Typography key={index}>{nota}</Typography>
      ))}
    </>
  );
}
