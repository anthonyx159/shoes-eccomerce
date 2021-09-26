import React from 'react'
import {useCartContext} from '../Context/cartContext'

const ItemDetail = ({prod}) => {

    const {agregarItem} = useCartContext()

    const handleAgregar = (cant)=>{
        if (prod.isAvailable) {
            console.log('El item se agrego correctamente')
            agregarItem(prod,cant)
            prod.isAvailable = false
        } else {
            console.log('El item ya fue agregado')
        }
    }

    return (
        <>
            <h2>{prod.title}</h2>
            <h2>{prod.price}</h2>
            <img src={prod.foto} alt="foto"  />
            <button onClick={handleAgregar}>agregar</button>
        </>
    )
}

export default ItemDetail
