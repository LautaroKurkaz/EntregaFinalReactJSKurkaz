import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Card } from './components/index.js'
import MapProducts from './components/MapProducts/MapProducts.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path='category/:category' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


