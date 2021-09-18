import React from 'react'

const ItemDetail = ({prod}) => {
    return (
        <>
            <h2>{prod.title}</h2>
            <h2>{prod.price}</h2>
            <img src={prod.foto} alt="foto"  />
        </>
    )
}

export default ItemDetail
