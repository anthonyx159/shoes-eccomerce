import { useState, createContext, useContext, useEffect } from "react"

const cartContext = createContext()

export const useCartContext = () => {
    return useContext(cartContext)
}
  

export const CartContext =({ children })=>{

    const [cartList, setCartList] = useState([])

    useEffect(() => {
        //Si existe en el localstorage lo pinta
       let productStorage = JSON.parse(localStorage.getItem('products'))
       if(productStorage){
        setCartList(productStorage)
       }
    }, [])

    const agregarItem = (item, cantidad, talla) => {
        const index = cartList.findIndex(i => i.item.id === item.id)//pos    -1
  
        // let qytArray = []

          if (index > -1) {
            let oldQy = cartList[index].quantity
            let oldSize = cartList[index].size
            let newQy
            let newSize

            if (typeof oldQy === 'number' ) {
                newQy =  [oldQy, cantidad]
                newSize =  [oldSize, talla]
            } else {
                newQy = [...oldQy, cantidad]
                newSize = [...oldSize, talla]
            }
            
            cartList.splice(index, 1)
            setCartList([...cartList, { item, quantity: newQy, size: newSize}])
            localStorage.setItem('products', JSON.stringify([...cartList, { item, quantity: newQy, size: newSize}]))
            
          } else {
            setCartList([...cartList, {item: item, quantity: cantidad, size: talla}])
            localStorage.setItem('products', JSON.stringify([...cartList, {item: item, quantity: cantidad, size: talla}]))
          }

        // Ingresar products al localstorage
        // localStorage.setItem('products', JSON.stringify([...cartList, {item: item, quantity: cantidad, size: talla}]))
        
    }

    const deleteFromCart = (item) => {
    //Verificamos si esta en el carrito   
    const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);

    setCartList([...deleteProduct]);
    localStorage.setItem('products', JSON.stringify([...deleteProduct]))
    };   

    const iconCart = () => {
        
        //Suma de productos que no sean arrays
        let filter1 = cartList.filter( item => typeof item.quantity === 'number')
        let qt1 = filter1.reduce((acum, valor) => acum + valor.quantity, 0)
        
        //Suma de productos que sean arrays
        let filter2 = cartList.filter(item => item.quantity instanceof Array)
        let changeFilter2 = filter2.map( item => (item.quantity).reduce((a,b) => a + b ,0))
        let qt2 = changeFilter2.reduce((a, b) => a + b, 0)
        
        return qt1 + qt2
        
    }

    const precioTotal =()=>{
        //Suma de productos que no sean arrays
        let filter1 = cartList.filter( item => typeof item.quantity === 'number')
        let sum1 = filter1.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 

        //Suma de productos que sean arrays
        let filter2 = cartList.filter(item => item.quantity instanceof Array)
        let sumFilter2 = filter2.map( product => (product.quantity).reduce((a,b) => a + b, 0) * product.item.price)
        let sum2 = sumFilter2.reduce((acum, valor) => acum + valor, 0)

        return sum1 + sum2
      }

    
    const vaciarCarrito=()=>{
        setCartList([])
        localStorage.setItem('products', JSON.stringify([]))
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

