import { useState, createContext, useContext } from "react"

const cartContext = createContext()

export const useCartContext = () => {
    return useContext(cartContext)
}
  

export const CartContext =({ children })=>{

    const [cartList, setCartList] = useState([])


    const agregarItem = (item, cantidad) => {

        const index = cartList.findIndex(i => i.item.id === item.id)//pos    -1
  
          if (index > -1) {
            const oldQy = cartList[index].quantity
  
            cartList.splice(index, 1)
            setCartList([...cartList, { item, quantity: cantidad + oldQy}])
          } else {
            setCartList([...cartList, {item: item, quantity: cantidad}])
          }
      }

      console.log('Listado de items', cartList)


    const deleteFromCart = (item) => {
    //Verificamos si esta en el carrito   
    const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);

    setCartList([...deleteProduct]);
    };   

    const iconCart = () => {
        return cartList.reduce( (acum, valor)=> acum + valor.quantity, 0)         
    }

    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
      }

    
    const vaciarCarrito=()=>{
        setCartList([])
    }

    // function mostrarPersona() {
    //     console.log()
    // }    
    /* console.log(cartList()) */
    return(
        <cartContext.Provider value={{
            cartList,
            agregarItem,
            vaciarCarrito,
            iconCart,
            deleteFromCart,
            precioTotal
            //mostrarPersona
        }} >
            {children}
        </cartContext.Provider>
    )
}

