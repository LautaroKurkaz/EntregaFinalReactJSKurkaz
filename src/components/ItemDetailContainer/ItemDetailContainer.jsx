import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Item from "../Item/Item"
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ProductsContext from "../../context/ProductsContext";
import { useContext } from "react";

export const ItemDetailContainer = () => {

    const { products } = useContext(ProductsContext)
    const { id } = useParams();

    const searchId = id;
    const searchIndex = products.findIndex( product => product.id === searchId )
    return (
    <>
      <ItemDetail {...products[searchIndex]}/>
    </>
  )
}


export default ItemDetailContainer
