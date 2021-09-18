import {useEffect, useState} from 'react'
import './ItemList.css'
import { Link } from 'react-router-dom'
import { getFetch } from '../../Util/getMock'


const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
   
    useEffect(() => {
        getFetch
        .then(res => {
            setProducts(res)
            setLoading(false)
        }, [])
    })
    

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
