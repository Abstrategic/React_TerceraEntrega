import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../asyncmock';
import { useState, useEffect } from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(()  => {
        getProducts().then( response =>{
            setProducts(response);
        })
            
    },[])

    console.log(products)
    return (
        
        <div className ="containerItemlist">
            <h1>{greeting}</h1>
            <ItemList products ={products}/>

        </div>  
    )
    }
    export default ItemListContainer;