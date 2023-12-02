import { useParams } from "react-router-dom"
import styles from "./ItemListContainer.module.css"
import React, { useContext, useEffect, useState } from 'react';
import { Item, ItemDetailContainer } from "..";
import ProductsContext from "../../context/ProductsContext";

export const ItemListContainer = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className={`${styles.contenedorCatalogo}`}>
      {products.map ( product => <Item id={product.id} key={product.id} name={product.name} price={product.price} img={product.img} category={product.category}/>)}
    </div>
  )
}

export default ItemListContainer
