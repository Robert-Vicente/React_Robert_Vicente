import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
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
    <div>
      <h2>{contador}</h2>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={sumar}>sumar</Button>
        <Button onClick={restar}>restar</Button>
        <Button Click={() => onAdd(contador)}>Agregar al carrito </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
