import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useCartContext } from '../../Context/cartContext'
import './header.css'
import logo from './../../img/logo.png'

export const Header = () => {

    const { iconCart } = useCartContext()

    return (
        <>

        <header className="header-ec">
            <div className="header-ec__container">
                <div className="header-ec__content">
                    <div className="header-ec__img">
                        <Link to='/'>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="header-ec__menu">
                        <ul className="menu">
                            <li className="menu__item"><Link to="/">Inicio</Link></li>
                            <li className="menu__item"><a href="#catalogue">Catálogo</a></li>
                            <li className="menu__item"><a href="#about">Nosotros</a></li>
                            <Link to="/cart" className="cart-count">
                                <span>{iconCart()}</span>               
                                Cart
                            </Link>  
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
