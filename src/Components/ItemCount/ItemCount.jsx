import { Button } from "@mui/material";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
    <h2>Cantidad: {contador}</h2>
    <div className="btns">
      <Button variant="outlined" color="success" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" color="success" onClick={() => onAdd(contador)}>
        agregar al carrito
      </Button>
      <Button variant="outlined" color="success" onClick={restar}>
        -
      </Button>
    </div>
  </div>
  );
};

export default ItemCount;
