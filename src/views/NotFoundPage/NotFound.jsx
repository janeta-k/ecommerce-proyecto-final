import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./NotFound.css";

const Checkout = () => {
  return (
    <div className="text-center">
      <h2 className="mt-5 mb-5">PÁGINA NO ENCONTRADA</h2>
      <Link to={"/"}>
        <Button className="mb-5" variant="info">
          ir a la página principal
        </Button>
      </Link>
    </div>
  );
};

export default Checkout;
