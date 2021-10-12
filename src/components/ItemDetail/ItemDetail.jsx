import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

import {useCartContext} from '../../Context/cartContext'

const ItemDetail = ({prod}) => {

    console.log(prod)

    const  {agregarItem} = useCartContext()

    const onAdd=(cant)=>{
        agregarItem( prod, cant )
    }  

    return (
        <>
            <div className="card-selected">
                <div className="card-selected__container">
                    <div className="card-selected__content">
                        <div className="card-selected__head">
                            <img src={'data:image/png;base64,'+prod.img} alt="foto" className="detail-product" />
                        </div>
                        <div className="card-selected__body">
                            <h2 className="card-selected__title">{prod.title}</h2>
                            <p className="card-selected__detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt. Odio, nulla provident. Inventore cumque.</p>    
                            <p className="card-selected__price">Precio:{prod.price}</p>
                            <span>Talla: </span><select name="select-size" id="" className="card-selected__choose">
                                <option value>Elige una opcion</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                            </select>
                            <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail
