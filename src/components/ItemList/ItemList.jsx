import {useEffect, useState} from 'react'
import './ItemList.css'
import { Link, useParams } from 'react-router-dom'
import { getFetch } from '../../Util/getMock'


const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { idCategory } = useParams()
   
    useEffect(() => {
        if(idCategory) {
            getFetch
            .then(res => {
                console.log(res)
                console.log(idCategory)
                setProducts(res.filter(product => product.categoria.toLowerCase() == idCategory))
                setLoading(false)
            })
        } else {
            getFetch
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
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
