import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  const añoActual = new Date().getFullYear();
  const nombreAplicacion = "Curso Alkemy React";
  return (
    <Box component="footer" sx={{paddingTop:"2vh"}}>
      <Typography variant="subtitle2">
        &copy; {añoActual} {nombreAplicacion}
      </Typography>
    </Box>
  );
}
