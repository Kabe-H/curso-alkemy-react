import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [data, setDatos] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Error procesando la solicitud");
  //       }
  //       const data = await response.json();
  //       setData(data.slice(0, 5));
  //     } catch (error) {
  //       setError(error);
  //     }
  //     setLoader(false);
  //   };

  //   if (loading) {
  //     return <Typography>Cargando...</Typography>;
  //   }

  //   if (error) {
  //     return <Typography>Error: {error}</Typography>;
  //   }

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.slice(0, 5));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {data.map((item) => (
        <article key={item.id}>
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="body2">{item.body}</Typography>
        </article>
      ))}
    </div>
  );
}
