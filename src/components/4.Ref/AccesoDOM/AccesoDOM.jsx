import { TextField, Button } from "@mui/material";
import React, { useRef } from "react";

export default function AccesoDOM() {
  const ejemploRef = useRef("");
  const resultRef = useRef(null);

  const haceAlgo = () => {
    // alert(ejemploRef.current.value);    
    resultRef.current.innerHTML = ejemploRef.current.value;
  };

  return (
    <div>
      {/* <TextField inputRef={ejemploRef} /> */}
      <TextField type="text" inputRef={ejemploRef} />
      <Button variant='contained' onClick={haceAlgo}>Hace Algo</Button>
      <div ref={resultRef} />
    </div>
  );
}
