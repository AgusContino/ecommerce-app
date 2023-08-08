import "./style.scss";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { SuperBalls } from "@uiball/loaders";

function ItemDetailContainer() {
   const { addToCart } = useContext(cartContext)

   const [product, setProduct] = useState({});
   const { id } = useParams();

   async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
   }

   function handleAddToCart(contador) {
      addToCart(product, contador)
   }

   useEffect(() => {
      requestProduct();
   }, []);

   const stock = 3; //!esto despues hay que pasarlo a la base de datos

   if (product.nombre === undefined) {
      return ( // loader
         <div className="superBalls">
            <SuperBalls
               size={150}
               speed={1.5}
               color="white"
            />
         </div>
      );
   } else {
      return (
         <div className="productDetail">
            <h3>{product.nombre}</h3>
            <p>Fabricante: {product.marca}</p>
            <img src={product.imagen} alt={product.nombre} />
            <p>Genero: {product.genero}</p>
            <p>JugadoreS: {product.jugadores}</p>
            <p>Edades: {product.edades}</p>
            <p>Origen: {product.origen}</p>
            <p>
               Valor: <span>${product.precio}</span>
            </p>
            <p>
               Stock: <span>{stock}</span> disponibles
            </p>
            <ItemCount onAddToCart={handleAddToCart} stock={stock} producto={product.nombre} />
         </div> //!luego hay que tomar de la base de datos los dos stock: del P stock y del item count stock
      );
   }


}

export default ItemDetailContainer;
