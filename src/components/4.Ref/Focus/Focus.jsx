import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";

export default function Focus() {
  const inputRef = useRef(null);
  
  const handleFocus = () => {
    console.log(inputRef, "inputRefPURO");
    console.log(inputRef.current.value, "inputRefVALUE");
    inputRef.current.focus();
  };

  return (
    <div>
      <TextField inputRef={inputRef} />
      <Button onClick={handleFocus}>Enfocar</Button>
    </div>
  );
}
