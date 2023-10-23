import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar />
      
      <ItemListContainer greeting="¡Bienvenidos a mi tienda!" />
    </>
  )
}

export default App


