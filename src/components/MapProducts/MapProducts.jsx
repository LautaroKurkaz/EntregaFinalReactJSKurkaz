import { useState } from "react"
import Card from "../Card/Card"
import styles from "./MapProducts.module.css"


export const MapProducts = ({productos}) => {
  return (
    <div className={`${styles.contenedorCard}`}>
        {productos.map(product => <Card id={product.id} key={product.id} name={product.name} price={product.price} img={product.img}/>)}
    </div>
  )
}

export default MapProducts
