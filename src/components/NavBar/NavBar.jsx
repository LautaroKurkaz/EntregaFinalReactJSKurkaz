import Item from "../Item/Item"
import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import ProductsContext from "../../context/ProductsContext"

const NavBar = () => {

  const { getProducts } = useContext(ProductsContext)
  return (
    <div className={`${styles.container}`}>
      <div>
        <Link to={"/"} onClick={() => getProducts("")}>
          <h1>TIENDA BRANDSEN</h1>
        </Link>
      </div> 
      <div style={{marginTop:"60px"}}>
        <Link to="/category/baño"><button className={`${styles.categoryButton}`} onClick={() => getProducts("baño")}>Baño</button></Link>
        <Link to="/category/dormitorio"><button className={`${styles.categoryButton}`} onClick={() => getProducts("dormitorio")}>Dormitorio</button></Link>
        <Link to="/category/cocina"><button className={`${styles.categoryButton}`} onClick={() => getProducts("cocina")}>Cocina</button></Link>
        <Link to="/category/deco"><button className={`${styles.categoryButton}`} onClick={() => getProducts("deco")}>Deco</button></Link>
      </div>
      <div>
        <CartWidget />
      </div>

    </div>
    
  )
}

export default NavBar
