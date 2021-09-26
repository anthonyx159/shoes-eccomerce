import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({prod}) => {

    const onAdd=(cant)=>{
        console.log(cant)   
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
