import React from 'react'
import { NavBar} from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContext } from './components/Context/cartContext'

export const App = () => {
    return (
        <>
        <CartContext>
            <Router>
                <NavBar/>

                <Switch>
                    <Route path='/' exact component={ ItemListContainer } />
                    <Route path='/detalle/:idProducto' exact component={ItemDetailContainer } />
                </Switch>

            </Router>
        </CartContext>

        </>
    )
}
