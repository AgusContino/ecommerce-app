import "./style.scss";
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { SuperBalls } from '@uiball/loaders';
import { getData, getCategoryData } from "../../services/firebase";

function ItemListContainer(props) {
   const [productos, setProductos] = useState([]);
   const { categoryId } = useParams();

   async function traerProductos() {
      const respuesta = categoryId
         ? await getCategoryData(categoryId)
         : await getData();

      setProductos(respuesta);
   }
   useEffect(() => {
      traerProductos();
   }, [categoryId]);

   return (
      <div className="itemListContainerComp">
         <p className="saludo">{props.saludo}</p>
         <h2 className="contenedorProductos__titulo">Nuestro catálogo lunatico</h2>

         { // loader
            productos.length === 0
               ? <div className="superBalls">
                  <SuperBalls
                     size={150}
                     speed={1.5}
                     color="white"
                  />
               </div>
               : ""
         }

         <div className="contenedorProductos__contenedor">
            {productos.map((producto) => (
               <Item key={producto.id} {...producto}></Item>
            ))}
         </div>
      </div>
   );


}

export default ItemListContainer;
