import styles from './CartWidget.module.css'


const CartWidget = () => {
  return (
    <div style={{display: "flex", justifyContent: "flex-end"}}>
        <img src="../../../img/carrito.png" alt="" className={`${styles.carrito}`}/>
        <p>0</p>
    </div> 
  )
}

export default CartWidget
