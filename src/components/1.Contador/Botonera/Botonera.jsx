import { Button } from "@mui/material";
import React from "react";

export default function Botonera(props) {
  return (
    <div>
      <Button variant="contained" onClick={props.incrementar} sx={{margin:'5px'}}>
        +
      </Button>
      <Button variant="contained" onClick={props.decrementar} sx={{margin:'5px'}}>
        -
      </Button>
    </div>
  );
}
