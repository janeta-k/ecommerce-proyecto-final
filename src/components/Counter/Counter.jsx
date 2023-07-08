import { useState } from "react";
import PropTypes from "prop-types";
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
            <button disabled={count <= 1} onClick={decrementar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incrementar}>+</button>
            <div>
                <button onClick={() => onAdd(count)}>agregar al carrito</button>
            </div>
        </div>
    );
};

Counter.propTypes = {
    stock: PropTypes.number,
    onAdd: PropTypes.func,
};

export default Counter;
