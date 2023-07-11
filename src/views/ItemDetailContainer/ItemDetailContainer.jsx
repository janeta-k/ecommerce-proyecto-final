import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ItemNotFound from "../../components/ItemNotFound/ItemNotFound";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const oneItem = doc(db, "felinusProducts", `${id}`);
    console.log(oneItem);
    getDoc(oneItem).then((res) => setProduct({ id: res.id, ...res.data() }));
  }, [id]);

  return (
    <div className="item-detail-container">
      {Object.keys(product).length == 1 ? (
        <ItemNotFound />
      ) : (
        <ItemDetail producto={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
