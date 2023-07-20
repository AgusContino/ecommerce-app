import "./style.scss";
import { useState, useEffect } from "react";
import getData from "../../datos/datos";
import Item from "../Item/Item";
import { getCategoryData } from "../../datos/datos";
import { useParams } from "react-router-dom";

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
  });

  return (
    <div className="itemListContainer">
      <p className="saludo">{props.saludo}</p>
      <h2 className="contenedorProductos__titulo">Nuestro catálogo lunatico</h2>
      <div className="contenedorProductos__contenedor">
        {productos.map((producto) => (
          <Item key={producto.id} {...producto}></Item>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
