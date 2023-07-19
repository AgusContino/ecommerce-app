import "./style.scss"
import { useState, useEffect } from "react";
import getData from "../../datos/datos";
import Item from "../Item/Item";

function ItemListContainer(props) {

   const [productos, setProductos] = useState([])

   async function traerProductos() {
      const respuesta = await getData()
      setProductos(respuesta)
   }
   useEffect(() => {
      traerProductos()
   })

   return (
      <div className="itemListContainer">
         <p className="saludo">{props.saludo}</p>
         <h2 className='contenedorProductos__titulo'>Nuestro catálogo lunatico</h2>
         <div className="contenedorProductos__contenedor">
            {productos.map((producto) => (
               <Item key={producto.id} {...producto}></Item>
            ))}
         </div>
      </div>
   )

}

export default ItemListContainer