import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({prod}) => {
    return (
        <>
            <h2>{prod.title}</h2>
            <h2>{prod.price}</h2>
            <img src={prod.foto} alt="foto" className="detail-product" />
        </>
    )
}

export default ItemDetail
