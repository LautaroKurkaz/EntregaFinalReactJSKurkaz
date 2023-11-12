import { useParams } from "react-router-dom"
import MapProducts from "../MapProducts/MapProducts"
import styles from "./ItemListContainer.module.css"
import React, { useEffect, useState } from 'react';

import { getProducts } from "../asyncMock"


export const ItemListContainer = () => {
  
  const { category } = useParams()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((resp) => {
        if(category) {
          const productsFilter = resp.filter(product => product.category === category);
          setProducts(productsFilter);
        } else {
          setProducts(resp);
        }
      })
      .catch((error) => console.log(error));
  }, [category]);
  
  return (
    <div className={`${styles.contenedorCatalogo}`}>
      <MapProducts productos={products}/>
    </div>
  )
}

export default ItemListContainer
