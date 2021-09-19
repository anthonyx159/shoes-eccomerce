import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getFetch } from '../../Util/getMock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const { idProducto } = useParams()

    useEffect(() => {
        if(idProducto) {
            getFetch
            .then(products => {
                setProd(products.find(product => product.id === idProducto))
            })
            .catch(err => console.log(err))
        }
    }, [idProducto])

    
    return (
        <>
           <ItemDetail  prod={prod} />
        </>
    )
}

export default ItemDetailContainer
