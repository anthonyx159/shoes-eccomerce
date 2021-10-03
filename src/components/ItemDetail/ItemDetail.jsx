import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

import {useCartContext} from '../../Context/cartContext'

const ItemDetail = ({prod}) => {

    console.log(prod)

    const  {agregarItem} = useCartContext()

    const onAdd=(cant)=>{
        agregarItem( prod, cant )
    }  

    return (
        <>
            <h2>{prod.title}</h2>
            <h2>{prod.price}</h2>
            <img src={prod.foto} alt="foto" className="detail-product" />

            <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
        </>
    )
}

export default ItemDetail
