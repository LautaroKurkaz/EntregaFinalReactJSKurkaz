import { createContext } from "react";
import { collection, getDocs , query, where } from "firebase/firestore"
import { db } from "../config/firebaseConfig"
import { useState , useEffect } from "react";

export const ProductsContext = createContext(null);

export const ProductsContextProvider = ({ children }) => {
    
    const [products, setProducts] = useState([]);
    
    const getProducts = ( category ) => {
      const productsFirebase = category ? query(collection( db , "products") , where( "category" , "==" , category)) : query(collection( db , "products"));
      getDocs(productsFirebase)
      .then((resp) => {
        const productsList = resp.docs.map(( doc => ({ id: doc.id, ...doc.data() })));
        setProducts(productsList);
      })

    };

    useEffect(() => {
        getProducts();
    }, []);

    const objectProvider = {
        products,
        getProducts,
        useEffect
    }

    return <ProductsContext.Provider value={objectProvider}>{children}</ProductsContext.Provider>
}
export default ProductsContext;