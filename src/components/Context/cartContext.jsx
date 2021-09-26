import { useState, createContext, useContext } from "react"

const cartContext = createContext()

export const useCartContext = () => {
    return useContext(cartContext)
}
  

export const CartContext =({ children })=>{

    const [cartList, setCartList] = useState([])


    function agregarItem(prodNew){
        setCartList( [...cartList, prodNew] )   
        
    }

    // function mostrarPersona() {
    //     console.log()
    // }    
    console.log(cartList)
    return(
        <cartContext.Provider value={{
            cartList,
            agregarItem,
            //mostrarPersona
        }} >
            {children}
        </cartContext.Provider>
    )
}

