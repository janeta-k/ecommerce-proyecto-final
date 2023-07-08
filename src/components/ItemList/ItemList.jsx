import PropTypes from "prop-types";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
    return (
        <>
            {productos?.map((element) => (
                <Item
                    
                    key={element.id}
                    id={element.id}
                    name={element.nombre}
                    description={element.descripcion}
                    price={element.precio}
                    category={element.categoria}
                    img={element.img}
                />
            ))}
        </>
    );
};

ItemList.propTypes = {
    productos: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ])
};

export default ItemList;