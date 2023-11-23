import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
export default function ReactArrayKeys({ data }) {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
}
