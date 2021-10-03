import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import { useCartContext } from '../../Context/cartContext'

export const NavBar = () => {

    const { iconCart } = useCartContext()

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
                        <li className="item">Inicio</li>
                    </Link>
                    <Link to='/category/nike'>
                        <li className="item">Nike</li>
                    </Link>
                    <Link to='/category/adidas'>
                        <li className="item">Adidas</li>
                    </Link>
                    <Link to='/category/puma'>
                        <li className="item">Puma</li>
                    </Link>
                    <Link to='/category/rebook'>
                        <li className="item">Air Jordan</li>
                    </Link>
                    <Link to='/category/vans'>
                        <li className="item">Vans</li>
                    </Link>
                    <Link to="/cart" className="cart-count">
                        <span>{iconCart()}</span>               
                        Cart
                    </Link>  
                </ul>
            </div>    
        </div>
        </>
    )
}
