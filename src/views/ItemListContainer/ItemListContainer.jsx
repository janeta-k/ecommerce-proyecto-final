import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //const db = getFirestore();
    const itemsCollection = collection(db, "felinusProducts");
    getDocs(itemsCollection).then((querySnapshot) => {
      const docs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docs);    
    });
  }, []);

  const categoryFilter = products.filter((producto) => producto.categoria == categoryId);


  return (
    <>
      <h5 className="title">La mejor calidad para tu amigo gatuno </h5>
      <Container>
        <Row>
          {categoryId ? <ItemList productos={categoryFilter}/> : <ItemList productos={products}/>}
        </Row>
      </Container>
    </>
  );
};

export default ItemListContainer;