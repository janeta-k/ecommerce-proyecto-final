import { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./Counter.css";

const Counter = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button
          className="count-button"
          variant="secondary"
          disabled={count <= 1}
          onClick={decrementar}
        >
          -
        </Button>
        <span className="count">{count}</span>
        <Button
          className="count-button"
          variant="secondary"
          disabled={count >= stock}
          onClick={incrementar}
        >
          +
        </Button>
      </ButtonGroup>

      <div>
        <Button
          variant="outline-info"
          onClick={() => onAdd(count)}
          className="add-button"
        >
          agregar al carrito
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  stock: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter;
