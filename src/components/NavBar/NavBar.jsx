import React, { useEffect } from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import { useCartContext } from '../../Context/cartContext'
import logo from './../../img/logo.png'


export const NavBar = () => {

    const { iconCart } = useCartContext()


    const addClassActive = (e) => {
        document.querySelectorAll('.brand__item').forEach( e => {
            e.classList.remove('active')
        })
    }


    return (
        <>
        {/* <CartWidget /> */}
        <h2 className="text-hero">Hola encuentra el calzado perfecto para ti</h2>
        <div className="brand" id="catalogue">
            <div className="brand__container">
                <div className="brand__content">
                    {/* <div className="brand">
                        <Link to='/'>
                            <div className="brand__text">UrbanSneaker</div>
                        </Link>
                    </div> */}
                    <ul className="brand__list">
                        {/* <Link to='/'>
                            <li className="brand__item">Inicio</li>
                        </Link> */}
                        <Link to='/category/nike'  onClick={addClassActive} >
                            <li className="brand__item">Nike</li>
                        </Link>
                        <Link to='/category/adidas' onClick={addClassActive} >
                            <li className="brand__item">Adidas</li>
                        </Link>
                        <Link to='/category/puma' onClick={addClassActive} >
                            <li className="brand__item">Puma</li>
                        </Link>
                        <Link to='/category/rebook' onClick={addClassActive} >
                            <li className="brand__item">Air Jordan</li>
                        </Link>
                        <Link to='/category/vans' onClick={addClassActive} >
                            <li className="brand__item">Vans</li>
                        </Link>
                        {/* <Link to="/cart" className="cart-count">
                            <span>{iconCart()}</span>               
                            Cart
                        </Link>   */}
                    </ul>
                </div>    
            </div>
        </div>
        </>
    )
}
