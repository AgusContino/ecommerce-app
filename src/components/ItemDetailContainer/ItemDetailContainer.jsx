import "./style.scss";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
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

   const stock = product.stock

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
            {
               stock <= 0
               ?  <>
                     <p>No quedan unidades disponibles</p>
                     <Link to="/"><button>Volver al listado</button></Link>
                  </>
               : <ItemCount onAddToCart={handleAddToCart} stock={stock} producto={product.nombre} />
            }
         </div>
      );
   }


}

export default ItemDetailContainer;
