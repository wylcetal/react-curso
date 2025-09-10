import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"
import { toCapital } from "../helpers/toCapital"

const ItemDetail = ({ item }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext)

  const [cantidad, setCantidad] = useState(1)

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <div className="descripcion">{item.descripcion}</div>
          <div className="categoria">Categoria: {toCapital(item.categoria)}</div>
          <div className="precio">${item.precio}</div>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail