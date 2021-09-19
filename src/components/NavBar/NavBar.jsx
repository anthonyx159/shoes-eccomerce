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
                </ul>
            </div>    
        </div>
        </>
    )
}
