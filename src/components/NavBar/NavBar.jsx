import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
        <CartWidget />
        <div className="container">
            <div className="content">
                <div className="brand">
                    <Link to='/'>
                        <div className="brand__text">UrbanSneaker</div>
                    </Link>
                </div>
                <ul className="list">
                    <Link to='/'>
                        <li className="item"><a href="#">Inicio</a></li>
                    </Link>
                    <li className="item"><a href="#">Catalogo</a></li>
                    <li className="item"><a href="#">Nosotros</a></li>
                    <li className="item"><a href="#">Carrito</a></li>
                </ul>
            </div>    
        </div>
        </>
    )
}
