import { Button } from "@mui/base";
import { TextField } from "@mui/material";
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
      <input type="text" ref={ejemploRef} />
      <Button onClick={haceAlgo}>Hace Algo</Button>
      <div ref={resultRef} />
    </div>
  );
}
