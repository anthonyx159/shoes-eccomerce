import {useState} from 'react'
import { Link } from 'react-router-dom'
import './Itemcount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    

    function sumar(){
        if(count < stock){
            setCount(count + 1) // count ++ => count = count +1        

        }
    }

    function restar(){
        if (count>1) {
            setCount(count - 1)            
        }
    }

    const agregarCarrito=()=>{
        onAdd(count)
        setCambiarBoton(false)
    }

    return (
        <>
            <div className="card-selected__qty">
                <button onClick={sumar}>+</button>
                <label>{count}</label>
                <button onClick={restar}>-</button><br/>
            </div>
           {cambiarBoton ?
           
                <button onClick={agregarCarrito} className="card-selected__addCart">Agregar Al carrito</button>                
            : 
            <div>
                <Link to="/cart" >
                    <button className="card-selected__end">Terminar Compra</button>            
                </Link>
                <Link to="/" >
                    <button className="card-selected__continue">Seguir Comprando</button>      
                </Link>
            </div>
            
            }
            
            
        </>
    )
}

export default ItemCount
