import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { Link } from "react-router-dom"
import { products } from "../asyncMock"
import styles from "./ItemDetail.module.css"


export const ItemDetail = ({name, description, price , img}) => {
  return (
    <div className={`${styles.containerDetailsTwo}`}>
      <div className={`${styles.containerDetails}`}>
        <h2>{name}</h2>
        <img src={img} alt="" />
        <p className={`${styles.text}`}>{description}</p>
        <p className={`${styles.text}`}>Precio: ${price}</p>
      </div>
      <Link to="/">
          <button className={`${styles.btnVolver}`}>Volver</button>
        </Link>
    </div>
  )
}

export default ItemDetail
