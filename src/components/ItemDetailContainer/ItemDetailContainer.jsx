import { useParams } from "react-router-dom"
import { products } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import Card from "../Card/Card"

export const ItemDetailContainer = () => {

    const { id } = useParams();
    return (
    <>
      <ItemDetail {...products[id]}/>
    </>
  )
}


export default ItemDetailContainer
