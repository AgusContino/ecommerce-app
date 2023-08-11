import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";
import OrderTicket from "./components/OrderTicket/OrderTicket";

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

                  <Route path="/checkout" element={<Checkout></Checkout>}></Route>

                  <Route path="/orderTicket/:orderId" element={<OrderTicket></OrderTicket>} />

                  <Route
                     path="*"
                     element={
                        <h2 style={{ textAlign: "center", backgroundColor: "white" }}>
                           Parece que estamos fuera de órbita (404)
                        </h2>}>
                  </Route>



               </Routes>
            </BrowserRouter>
         </CartContextProvider>
      </div>
   );
}

export default App;
