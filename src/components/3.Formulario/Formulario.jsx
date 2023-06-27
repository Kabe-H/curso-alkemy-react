import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [submited, setSubmited] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    setNombre("");
    setMail("");
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="nombre"
                label="Nombre Completo"
                name="nombre"
                variant="outlined"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="mail"
                label="Correo Electrónico"
                name="mail"
                variant="outlined"
                value={mail}
                onChange={handleMailChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Registrarse
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        {submited && (
          <div>
            <Typography variant="h3">Datos Ingresados</Typography>
            <Typography>El nombre es: {nombre}</Typography>
            <Typography>El mail es: {mail}</Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
