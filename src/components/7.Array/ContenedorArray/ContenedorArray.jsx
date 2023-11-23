import React from "react";
import { Typography } from "@mui/material";
import ReactArrayKeys from "../ReactArrayKeys/ReactArrayKeys";
export default function ContenedorArray() {
  const data = [
    { id: 1, name: "elemento 1" },
    { id: 2, name: "elemento 2" },
    { id: 3, name: "elemento 3" },
  ];
  return (
    <div>
      <Typography>Los elementos son:</Typography>
      <ReactArrayKeys data={data} />
    </div>
  );
}
