export const products = [
    { id: 1, name: "Dispensador jabón", description: "Dispensador de jabón de vidrio", price: 2600, img: "../../img/DispensadorJabon.jpg" , category: "baño"},
    { id: 2, name: "Soporte para toalla", description: "Soporte para toalla metálico", price: 4100, img: "../../img/SoporteToalla.webp", category: "baño" },
    { id: 3, name: "Jabonera", description: "Jabonera de vidrio 15cm", price: 1450, img:"../../img/Jabonera.jpg", category: "baño" },
    { id: 4, name: "Velador", description: "Velador metálico juvenil", price: 14500, img:"../../img/Velador.webp", category: "dormitorio" },
    { id: 5, name: "Repisa", description: "Repisa melamina color blanco", price: 25600 , img:"../../img/Repisa.webp", category: "dormitorio" },
    { id: 6, name: "Ropero", description: "Ropero melamina color blanco", price: 47200, img:"../../img/Ropero.jpg", category: "dormitorio" },
    { id: 7, name: "Cuchillo cerámica", description: "Cuchillo cerámica color blanco y negro", price: 2600, img:"../../img/Cuchillo.jpg", category: "cocina" },
    { id: 8, name: "Cazuelas", description: "Juego de 4 cazuelas cerámica color blanco", price: 6000, img:"../../img/Cazuela.png", category: "cocina" },
    { id: 9, name: "Platos", description: "Juego de 4 platos cerámica color blanco", price: 10000, img:"../../img/Plato.jpg", category: "cocina" },
    { id: 10, name: "Portarretrato", description: "Portarretrato madera 15x20", price: 900, img:"../../img/Portarretrato.jpeg", category: "deco" },
    { id: 11, name: "Florero", description: "Florero de vidrio", price: 5600, img:"../../img/Florero.webp", category: "deco" },
    { id: 12, name: "Almohadón", description: "Almohadón blanco", price: 2370 , img:"../../img/Almohadon.jpg", category: "deco" }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        resolve(products);
      } else {
        reject("No hay productos");
      }
    });
  };
