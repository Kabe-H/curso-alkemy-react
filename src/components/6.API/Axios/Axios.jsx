import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Card, Grid, CardMedia,CardContent } from "@mui/material";

export default function Axios() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetchPersonajes();
  }, []);

  const fetchPersonajes = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      console.log(response);
      setPersonajes(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Typography variant="h3">Personajes de Star Wars</Typography>
      <Grid container spacing={2}>
        {personajes.slice(0, 6).map((character, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 400, margin: "1rem" }}>
              <CardMedia
                component="img"
                height="400"
                image={`https://starwars-visualguide.com/assets/img/characters/${
                  index + 1
                }.jpg`}
                alt={character.name}
              />
              <CardContent>
                <Typography variant="h5">{character.name}</Typography>
                <Typography variant="body1">
                  Género: {character.gender}
                </Typography>
                <Typography variant="body1">
                  Altura: {character.height} cm
                </Typography>
                <Typography variant="body1">
                  Peso: {character.mass} kg
                </Typography>
                <Typography variant="body1">
                  Color de cabello: {character.hair_color}
                </Typography>
                <Typography variant="body1">
                  Color de ojos: {character.eye_color}
                </Typography>
                <Typography variant="body1">
                  Año de nacimiento: {character.birth_year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
