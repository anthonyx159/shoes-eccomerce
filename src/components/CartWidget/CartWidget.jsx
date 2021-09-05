import React from 'react'
import cart from '../../cart.png'
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <div className="cart">
            <img src={ cart } alt="Carrito de compras" />
        </div>
    )
}
