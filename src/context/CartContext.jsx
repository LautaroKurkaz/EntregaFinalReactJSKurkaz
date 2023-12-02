import { createContext, useState } from "react";
import { useEffect } from "react";
import {  addDoc , collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import swal from 'sweetalert';

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [ cart , setCart ] = useState([]);
    const [ total , setTotal ] = useState(0);
    const [ totalProducts , setTotalProducts ] = useState(0);

    const agregarProductoCarrito = ( producto , unidades ) => {
        const index = cart.findIndex((item) => item.id === producto.id);
        if ( index == -1 ) {
            const nuevoProducto = {
                ...producto,
                unidades,
                subTotal: producto.price * unidades
            };
            setCart([...cart , nuevoProducto]);
        } else {
            const copiaCart = [ ...cart ]
            copiaCart[index].unidades += unidades
            copiaCart[index].subTotal = copiaCart[index].price * copiaCart[index].unidades;
            setCart(copiaCart);
        }
      
    }

    const handleTotal = () => {
      const totalPrice = cart.reduce( (acum, item) => acum + item.subTotal, 0);
      setTotal(totalPrice);
    }

    const eliminarProducto = (id) => {
      const filter = cart.filter( product => product.id !== id );
      setCart(filter);
    }

    const handleTotalProducts = () => {
      const totalItems = cart.reduce( (acum, item) => acum + item.unidades, 0);
      setTotalProducts(totalItems);
    }

    const finalizarCompra = ( order ) => {
        addDoc(collection(db , "orders" ), order )
        .then((documentoRef) => {
            console.log(documentoRef.id)
            swal("Gracias por su compra, su número de órden es:" , documentoRef.id , "success")
            setCart([])
          })
        .catch((error) => {
            console.error('Error al añadir documento:', error);
          });
    }

    const newOrder = {
        total: total,
        products: cart,
    }

    useEffect(() => {
        handleTotal() 
        handleTotalProducts()
    }, [cart])
    
    
    const objectProvider = {
        cart,
        agregarProductoCarrito,
        total,
        eliminarProducto,
        totalProducts,
        finalizarCompra,
        newOrder,
    }

    return <CartContext.Provider value={objectProvider}>{children}</CartContext.Provider>
}