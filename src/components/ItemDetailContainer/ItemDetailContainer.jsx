import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getFetch } from '../../Util/getMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from './../../services/getFireBase'


const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const { idProducto } = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()

        if(idProducto) {

            dbQuery.collection('items')
            .get()
            .then( resp => {
                let data =  resp.docs.map( item => ({id: item.id, ...item.data()}) ) 
                setProd(data.find(product => product.id === idProducto))
            }) 
            .catch( err => console.log(err) )
        }
    }, [idProducto])

    
    return (
        <>
           <ItemDetail  prod={prod} />
        </>
    )
}

export default ItemDetailContainer
