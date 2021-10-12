import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = ({ salute }) => {

    const [loading, setLoading] = useState(true)

    // useEffect

    // console.log('me seleccionaron')

    return (
        <>
            <div className="card-container">
                <ItemList />
            </div>
        </>
    )
}
