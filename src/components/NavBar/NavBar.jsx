import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={`${styles.contenedor}`}>
      <div>
        <h1>MI TIENDA</h1>
      </div> 
      <div style={{marginTop:"30px"}}>
        <a href="">Categoria 1</a>
        <a href="">Categoria 2</a>
        <a href="">Categoria 3</a>
        <a href="">Categoria 4</a>
      </div>
      <div>
        <CartWidget />
      </div>

    </div>
    
  )
}

export default NavBar
