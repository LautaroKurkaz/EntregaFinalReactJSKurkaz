import { Link } from "react-router-dom"
import { products } from "../asyncMock"
import styles from "./Card.module.css"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"



export const Card = ({ name, price, img, id }) => {
  return (
    <div className={`${styles.card}`}>
        <h2>{name}</h2>
        <img src={img} alt="" />
        <h3>Precio: ${price}</h3>
        <Link to={`/item/${id-1}`}>
          <button className={`${styles.botonDetalle}`}>Ver detalles</button>
        </Link>
    </div>
  )
}

export default Card
