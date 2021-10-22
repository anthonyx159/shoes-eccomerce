import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = ({ salute }) => {

    const [loading, setLoading] = useState(true)

    return (
        <>
            <div className="card-container">
                <ItemList />
            </div>
        </>
    )
}
