// import {useState} from 'react'
// import { ContextApp } from '../../App'
// import { TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from '../../clases/clase11-12/clase11/ComponenteEjemplosCondicionales'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/cartContext'
import './Cart.css'


const Cart = ( {condition = true} ) => {  

    //const useContextApp = useContext(ContextApp)
    const { cartList, vaciarCarrito, deleteFromCart, precioTotal } = useCartContext()
    
    // if ( !condition) {
    //         return <h2>No puede ver cart</h2>;
    // }
        
    // condition ? : => if else
    // condition && 
    // condition ||
    console.log('items en cart', precioTotal())
    return (
        <div>
            <h1>Lista de articulos comprados</h1> 

            {cartList.length === 0  ?   
                <div>
                    <h1>No hay productos agregue algunos</h1>
                    <Link to='/' >Ir a Comprar</Link>
                </div>
            : 
                <div>
                    {cartList.map(resp => <div key={resp.item.id}>
                        <div className="box-items">
                            <h2>{resp.item.title}</h2>
                            <button onClick={()=> deleteFromCart(resp)} > X </button>
                        </div>
                    </div>
                    )}
                    <div>Precio total: {precioTotal()}</div>
                    <button onClick={() => vaciarCarrito()} >Vaciar Carrito</button>
                </div>
            }
              




            {/* { condition && <h2>Ud esta logueado puede ver la pág.</h2> }

            { !condition && <h2>Ud no esta logueado, NO puede ver la pág.</h2> } */}

            {/* <h2> { condition ? 'Ud esta logueado puede ver la pág.' : 'Ud esta No esta logueado puede ver la pág.' } </h2>  */}
            {/* <TextComponent4 /><br /> */}
            {/* <TextComponent5 /><br /> */}
            {/* <TextComponent6  /><br /> */}
            {/* <TextComponent7 /> */}
        </div>
    )
}

export default Cart
