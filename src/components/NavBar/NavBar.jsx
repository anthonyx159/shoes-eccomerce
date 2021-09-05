import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <>
        <CartWidget />
        <div className="container">
            <div className="content">
                <div className="brand">
                    <div className="brand__text">UrbanSneaker</div>
                </div>
                <ul className="list">
                    <li className="item"><a href="#">Inicio</a></li>
                    <li className="item"><a href="#">Catalogo</a></li>
                    <li className="item"><a href="#">Nosotros</a></li>
                    <li className="item"><a href="#">Carrito</a></li>
                </ul>
            </div>    
        </div>
        </>
    )
}
