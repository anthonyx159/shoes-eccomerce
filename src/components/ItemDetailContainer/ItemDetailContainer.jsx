import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getFetchUno } from '../../Util/getMock';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const { idProducto } = useParams()

    useEffect(() => {

        getFetchUno
        .then(resp =>  setProd(resp))
        .catch(err => console.log(err)) 
    }, [])

    
    return (
        <>
           <ItemDetail  prod={prod} />
        </>
    )
}

export default ItemDetailContainer
