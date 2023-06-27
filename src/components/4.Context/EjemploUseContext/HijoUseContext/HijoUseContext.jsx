import React, { useContext } from "react";
import { userContext } from "../EjemploUseContext";
import { Typography } from "@mui/material";

export default function HijoUseContext() {
  const user = useContext(userContext); 
  return (
    <div>
      {user && (
        <Typography>
          Hola {user.name}, iniciaste sesion con el correo: {user.mail}
        </Typography>
      )}
    </div>
  );
}
