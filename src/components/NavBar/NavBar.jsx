import Card from "../Card/Card"
import CartWidget from "../CartWidget/CartWidget"
import { products } from "../asyncMock"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"



const NavBar = () => {
  return (
    <div className={`${styles.container}`}>
      <div>
        <Link to={"/"}>
          <h1>TIENDA BRANDSEN</h1>
        </Link>
      </div> 
      <div style={{marginTop:"60px"}}>
        <Link to="/category/baño"><button className={`${styles.categoryButton}`}>Baño</button></Link>
        <Link to="/category/dormitorio"><button className={`${styles.categoryButton}`}>Dormitorio</button></Link>
        <Link to="/category/cocina"><button className={`${styles.categoryButton}`}>Cocina</button></Link>
        <Link to="/category/deco"><button className={`${styles.categoryButton}`}>Deco</button></Link>
      </div>
      <div>
        <CartWidget />
      </div>

    </div>
    
  )
}

export default NavBar
