import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemNotFound = () => {
  return (
    <div className="text-center">
      <h2 className="mt-5 mb-5">No se encuentra el item que busca</h2>
      <Link to={"/"}>
        <Button className="mb-5" variant="info">
          ir a la página principal
        </Button>
      </Link>
    </div>
  );
};

export default ItemNotFound;
