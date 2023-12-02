import { Link } from 'react-router-dom'
import styles from './CartWidget.module.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

  const { totalProducts } = useContext(CartContext);

  return (
    <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Link to={"/cart"}>
          <img src="../../../img/carrito.png" alt="" className={`${styles.carrito}`}/>
        </Link>
        <p>{totalProducts}</p>
    </div> 
  )
}

export default CartWidget
