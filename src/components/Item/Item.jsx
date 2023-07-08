import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import "./Item.css";

const Item = ({ id, name, category, img }) => {
  return (
    <Col xs md>
      <Card key={id} className="card-producto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Categoría: {category}</Card.Text>
          <Button variant="secondary" >
            <Link to={`/item/${id}`} className="button-color">Ver Detalles</Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  img: PropTypes.any.isRequired
};

export default Item;
