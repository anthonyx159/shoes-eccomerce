import React from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = ({ salute }) => {
    return (
        <>
            <h2>Hola { salute } estos son los items que tenemos para ti</h2>
            <div className="card-container">
                <ItemList />
            </div>
        </>
    )
}
