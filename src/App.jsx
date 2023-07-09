import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Views
import ItemListContainer from "./views/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer.jsx";
import ShoppingCart from "./views/ShoppingCart/ShoppingCart.jsx";
import NotFound from "./views/NotFoundPage/NotFound.jsx";

//Components
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

//context
import ShoppingCartContext from "./context/CartContext.jsx";


class App extends React.Component {
  render() {
    return (
      <ShoppingCartContext>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route exact path="/" element={<ItemListContainer />}/>
              <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
              <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
              <Route exact path="/cart" element={<ShoppingCart/>} />
              <Route exact path="*" element={<NotFound/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </ShoppingCartContext>
    )
  }
}

export default App;
