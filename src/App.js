import React from 'react'
import { NavBar} from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContext } from './Context/cartContext';
// import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperLib from './components/SwiperLib/SwiperLib'
import {Header} from './components/Header/Header'
import Cart from './components/Cart/Cart';
import 'normalize.css'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Footer } from './components/Footer/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    return (
        <>
            <CartContext>
                <Router>
                    <Header/>
                    <SwiperLib/>
                    <NavBar/>
                    <Switch>
                        <Route path='/' exact component={ ItemListContainer } />
                        <Route path='/category/:idCategory' exact component={ ItemListContainer } />
                        <Route path='/detalle/:idProducto' exact component={ItemDetailContainer } />
                        <Route exact path='/cart'>              
                            <Cart  />
                        </Route>
                    </Switch>
                    <AboutUs/>
                    <Footer/>
                </Router>
            </CartContext>
        </>
    )
}
