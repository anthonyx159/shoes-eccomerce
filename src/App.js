import React from 'react'
import { NavBar} from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContext } from './Context/cartContext';
import Cart from './components/Cart/Cart';

export const App = () => {
    return (
        <>
            <CartContext>
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route path='/' exact component={ ItemListContainer } />
                        <Route path='/category/:idCategory' exact component={ ItemListContainer } />
                        <Route path='/detalle/:idProducto' exact component={ItemDetailContainer } />
                        <Route exact path='/cart'>              
                            <Cart  />
                        </Route>
                    </Switch>

                </Router>
            </CartContext>
        </>
    )
}
