import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
 
  useEffect(() => {
    //const db = getFirestore();
    const oneItem = doc(db, "felinusProducts", `${id}` );
    getDoc(oneItem).then((res) => setProduct({ id: res.id, ...res.data() }));
  },[id]);

  return (
    <>
      <ItemDetail producto = {product}/>
    </>
  );
};

export default ItemDetailContainer;