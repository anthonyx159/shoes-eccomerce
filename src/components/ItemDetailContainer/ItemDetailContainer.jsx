import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getFetch } from '../../Util/getMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from './../../services/getFireBase'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)
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
            .finally( () => setLoading(false) )
        }
    }, [idProducto])

    
    return (
        <>
        { loading ? 
            <h2 className="item-detail-loading">Cargando...</h2>
          : 
          <ItemDetail  prod={prod} />
        }
        </>
    )
}

export default ItemDetailContainer
