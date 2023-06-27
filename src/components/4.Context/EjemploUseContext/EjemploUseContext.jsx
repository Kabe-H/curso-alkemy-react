import { Button } from "@mui/material";
import React, { useState } from "react";
import HijoUseContext from "./HijoUseContext/HijoUseContext";

export const userContext = React.createContext();

export default function EjemploUseContext() {
  const [user, setUser] = useState(null);

  const cerrarSesion = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({ name: "Juan", mail: "mail@mail.com" });
    }
  };

  return (
    <userContext.Provider value={user}>
      <Button onClick={cerrarSesion}>
        {user ? "Cerrar Sesion" : "Iniciar Sesion"}
      </Button>
      <div>
        <HijoUseContext />
      </div>
    </userContext.Provider>
  );
}
