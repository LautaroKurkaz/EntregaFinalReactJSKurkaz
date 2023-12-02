import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Item } from './components/index.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { ProductsContextProvider } from './context/ProductsContext.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter >
        <CartContextProvider>
        <ProductsContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>
            <Route path='category/:category' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Checkout/>}/>
          </Routes>
        </ProductsContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App


