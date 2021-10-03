import {useEffect, useState} from 'react'
import './ItemList.css'
import { Link, useParams } from 'react-router-dom'
import { getFetch } from '../../Util/getMock'
import { getFirestore } from './../../services/getFireBase'


const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { idCategory } = useParams()
   
    useEffect(() => {

        const dbQuery = getFirestore()

        if(idCategory) {
            dbQuery.collection('items')
            .get()
            .then( resp => {
                let data = resp.docs.map( item => ({id: item.id, ...item.data()}) ) 
                setProducts(data.filter( product => product.categoria.toLowerCase() == idCategory ))
            }) 
            .catch( err => console.log(err) )
            .finally( () => setLoading(false) )
        } else {

            dbQuery.collection('items')
            .get()
            .then( resp => {
                setProducts( resp.docs.map( item => ({id: item.id, ...item.data()}) ) )
            }) 
            .catch( err => console.log(err) )
            .finally( () => setLoading(false) )
        }

    }, [idCategory])
    

    return (
        <>
            {   loading ? 
                    <h2>Cargando.....</h2> 
                :                
                    products.map(product => 
                    <div key={product.id} className="card" >
                        <div className="card-header">
                            {product.title} 
                        </div>
                        <div className="card-body">
                            <img src={product.foto} />
                            S/.{product.price}
                        </div>
                        <div className="card-footer">
                            <Link to = {`/detalle/${product.id}`} >
                                <button className="btn btn-outline-primary btn-block">
                                    Comprar
                                </button>
                            </Link>    
                        </div>
                    
                    </div>
                        
            )  } 
        </>
    )
}

export default ItemList
