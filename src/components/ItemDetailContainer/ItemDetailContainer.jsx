import './style.scss'
import { useEffect,useState } from 'react'
import { getProduct } from '../../datos/datos'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

   const [product, setProduct] = useState({})
   const {id} = useParams()

   async function requestProduct() {

      const respuesta = await getProduct(id)
      setProduct(respuesta)
      
   }

   useEffect(()=>{
      requestProduct()
   }, [])

   return(
      <div className='productDetail'>
         <h3>{product.nombre}</h3>
         <p>Fabricante: {product.marca}</p>
         <img src={product.imagen} alt={product.nombre} />
         <p>Genero: {product.genero}</p>
         <p>JugadoreS: {product.jugadores}</p>
         <p>Edades: {product.edades}</p>
         <p>Origen: {product.origen}</p>
         <p>Valor: <span>${product.precio}</span></p>
      </div>
   )
}

export default ItemDetailContainer