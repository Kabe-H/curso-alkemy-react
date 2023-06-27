import React, { useState } from "react";
import Botonera from "./Botonera/Botonera";

export default function Contador() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>{`Valor: ${count}`}</p>
      <Botonera incrementar={increment} decrementar={decrement} />
    </div>
  );
}
