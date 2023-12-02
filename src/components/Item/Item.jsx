import { Link } from "react-router-dom"
import styles from "./Item.module.css"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"



export const Card = ({ name, price, img, id }) => {
  return (
    <div className={`${styles.card}`}>
        <h2>{name}</h2>
        <img src={img} alt="" />
        <h3>Precio: ${price}</h3>
        <Link to={`/item/${id}`}>
          <button className={`${styles.botonDetalle}`}>Ver detalles</button>
        </Link>
    </div>
  )
}

export default Card
