import React from 'react'
import { NavBar} from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

export const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer salute='Anthony' />
        </>
    )
}
