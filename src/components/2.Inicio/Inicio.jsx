import React from "react";
//MUI
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from './Card/Card'

export default function Inicio() {
  const producto = [
    { nombre: "Vaso", precio: 200 },
    { nombre: "Auriculares", precio: 20000 },
    { nombre: "Encendedor", precio: 150 },
  ];

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h4">Productos</Typography>
        </Grid>
        
          {producto ? (
            producto.map((result, index) => {
              return <Card key={index} data={result} />;
            })
          ) : (
            <Typography variant="h6">Usted no tiene ningun producto</Typography>
          )}
        
      </Grid>
    </div>
  );
}