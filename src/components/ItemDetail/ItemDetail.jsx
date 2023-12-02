import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { Link } from "react-router-dom"
import styles from "./ItemDetail.module.css"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

export const ItemDetail = ({name, description, price , img , id}) => {

  const { agregarProductoCarrito } = useContext(CartContext);

  const [count, setCount] = useState(1);

  const handleSum = () => {
    setCount( count + 1 );
  };
  
  const handleRes = () => {
    if ( count > 1 ) {
      setCount( count - 1 )
    }
  }
  
  return (
    <div className={`${styles.containerDetailsTwo}`}>
      <div className={`${styles.containerDetails}`}>
        <h2>{name}</h2>
        <img src={img} alt="" />
        <p className={`${styles.text}`}>{description}</p>
        <p className={`${styles.text}`}>Precio: ${price}</p>
        <div className={`${styles.contenedorCount}`}>
          <button onClick={handleRes} className={`${styles.btnCount}`}> - </button>
          {count}
          <button onClick={handleSum} className={`${styles.btnCount}`}> + </button>
        </div>
        <Link to={"/cart"}>
          <button className={`${styles.btnAgregarCarrito}`} onClick={() => agregarProductoCarrito( {id, name, price}, count  )}>Agregar al carrito</button>
        </Link>
      </div>
      <Link to="/">
          <button className={`${styles.btnVolver}`}>Volver</button>
        </Link>
    </div>
  )
}

export default ItemDetail
