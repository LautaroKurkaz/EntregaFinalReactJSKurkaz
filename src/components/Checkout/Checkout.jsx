import { Link } from "react-router-dom"
import styles from "./Checkout.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {

    const { cart } = useContext(CartContext);
    const { total } = useContext(CartContext);
    const { eliminarProducto } = useContext(CartContext);
    const { finalizarCompra } = useContext(CartContext);
    const { newOrder } = useContext(CartContext);

     
  return (
    <div className={`${styles.contenedorCarrito}`}>
        <h2>Carrito</h2>
        <div className={`${styles.contenedorItems}`}>
        {cart.map((item) => (
            <div className={`${styles.contenedorItemCarrito}`}>
                <p>Producto:{item.name}</p>
                <p>Unidades:{item.unidades}</p>
                <p>Precio Unitario:${item.price}</p>
                <p>Subtotal:${item.subTotal}</p>
                <button className={`${styles.btnEliminarProducto}`} onClick={() => eliminarProducto(item.id)}>Eliminar producto</button>
            </div>
        ))}
        </div>
        <h3>Total de la compra: ${total}</h3>
        <label htmlFor="nombre"> Nombre </label>
        <input type="text" id="nombre" required/>
        <label htmlFor="telefono">Teléfono</label>
        <input type="number" id="telefono" required/>
        <label htmlFor="email1"> Email </label>
        <input type="text" id="email1" required/>
        <label htmlFor="email2"> Repetir Email </label>
        <input type="text" id="email2" required/>
        <input type="submit" className={`${styles.btnFinalizarCompra}`} onClick={() => finalizarCompra(newOrder)} value="Realizar compra"/>
        <Link to={"/"}>
            <button className={`${styles.btnAgregarProductos}`}>Agregar más productos</button>
        </Link>

      </div>
  )
}

export default Checkout
