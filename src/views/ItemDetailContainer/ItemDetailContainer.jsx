import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import ItemNotFound from "../../components/ItemNotFound/ItemNotFound";

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id)

  const [product, setProduct] = useState([]);
  console.log(product)
 
  useEffect(() => {
    //const db = getFirestore();
    const oneItem = doc(db, "felinusProducts", `${id}` );
    console.log(oneItem)
    getDoc(oneItem).then((res) => setProduct({ id: res.id, ...res.data() }));
  },[id]);

  return (
    <>
    {
      Object.keys(product).length == 1 ? <ItemNotFound/> : <ItemDetail producto = {product}/>
    }
      
    </>
  );
};

export default ItemDetailContainer;