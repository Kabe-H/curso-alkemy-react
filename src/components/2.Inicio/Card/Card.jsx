import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
//Estilos
import "./styles.css";

export default function Card(props) {
  const [productos,setProductos] = useState()

  return (
    <div style={{ margin: "2em" }}>
      <Grid
        id="cardHeader"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: "#68C9F1", borderRadius: "30px 30px 0px 0px" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography sx={{ color: "#000" }}>
                {props.data.nombre}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography sx={{ color: "#000" }}>
                {`$ ${props.data.precio}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
