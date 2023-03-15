import React, { useEffect, useState } from 'react';
import Product from '../ex7-props/Product';

const ProductList = () => {

const [products,setProducts] = useState([]);

    useEffect(()=>{
        // Call API - get products.
        const responseData = [
            {
                title:'Old vintage camera', 
                description: 'An old vintage camera', 
                price: 500, 
                picture_URL:'product-1.jpg'
            },
            {
                title:'Camera lens', 
                description: 'Nikon camera lens', 
                price: 6000, 
                picture_URL:'https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                title:'Watch', 
                description: 'Wonderful michael kors watch', 
                price: 15000, 
                picture_URL:'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
    
        ]
        setProducts(responseData);

    },[])
    return (
        <div className='container card-group'>
            <div className='row'>
                {
                    products.map(product => {
                        return <Product data={product}/>
                    })
                }
            </div>
            
        </div>
    );
};

export default ProductList;