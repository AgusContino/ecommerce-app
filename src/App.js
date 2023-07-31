import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
   return (
      <div className="App">
         <CartContextProvider>
            <BrowserRouter>
               <header>
                  <Navbar />
               </header>

               <Routes>
                  <Route
                     path="/"
                     element={<ItemListContainer saludo="¡Bienvenidos a Lunatica!" />}
                  />

                  <Route path="/product/:id" element={<ItemDetailContainer />} />

                  <Route
                     path="/category/:categoryId"
                     element={<ItemListContainer saludo="¡Bienvenidos a Lunatica!" />}
                  />

                  <Route path="/carrito" element={<CartContainer></CartContainer>}></Route>
               </Routes>
            </BrowserRouter>
         </CartContextProvider>
      </div>
   );
}

export default App;
