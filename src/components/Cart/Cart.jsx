// import {useState} from 'react'
// import { ContextApp } from '../../App'
// import { TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from '../../clases/clase11-12/clase11/ComponenteEjemplosCondicionales'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/cartContext'
import './Cart.css'
import { Form } from '../Form/Form'


const Cart = ( {condition = true} ) => {  

    //const useContextApp = useContext(ContextApp)
    const { cartList, vaciarCarrito, deleteFromCart, precioTotal, iconCart } = useCartContext()
    
    // if ( !condition) {
    //         return <h2>No puede ver cart</h2>;
    // }
        
    // condition ? : => if else
    // condition && 
    // condition ||
    // console.log('items en cart', precioTotal())
    return (
        <div>

            {cartList.length === 0  ?   
                <div className="car-empty">
                    <h2 className="car-empty__title">No hay productos agregue algunos</h2>
                    <Link to='/' className="car-empty__buy">Ir a Comprar</Link>
                </div>
            : 
                <>
                    <div className="box">
                        <h2 className="box-title">Carrito de compras</h2>
                        <div className="box-option">
                            <div className="box-option__img">Imagen del producto</div>
                            <div className="box-option__name">Nombre del producto</div>
                            <div className="box-option__price">Precio</div>
                            <div className="box-option__size">Talla</div>
                            <div className="box-option__qty">Qty</div>
                        </div>
                        {cartList.map(resp => <div key={resp.item.id}>
                            <div className="box-item">
                                <div className="box-item__img"><img src={'data:image/png;base64,' + resp.item.img} alt={resp.item.title} /></div>
                                <div className="box-item__name">{resp.item.title}</div>
                                <div className="box-item__price">S/. {resp.item.price}</div>
                                <div className="box-item__size">
                                    { typeof resp.size === 'number' ? resp.size : resp.size.toString() }
                                </div>
                                <div className="box-item__qty">
                                    { typeof resp.quantity === 'number' ? resp.quantity : resp.quantity.toString() }
                                </div>
                                <button onClick={()=> deleteFromCart(resp)} className="box-item__delete"> X </button>
                            </div>
                        </div>
                        )}
                        <div>Precio total: S./ {precioTotal()} Soles</div>
                        <button onClick={() => vaciarCarrito()} >Vaciar Carrito</button>
                    </div>
                    <Form cartList={cartList} iconCart={iconCart} precioTotal={precioTotal} vaciarCarrito={vaciarCarrito}/>
                </>    
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
