import React from 'react';
import Menu from './Menu';
import Product from './Product'; // import the Product component

const App = () => {

    const menuList = 
    [
        {id: 1, name: 'Home', path: '/home', active: 'active'},
        {id: 2, name: 'Login', path: '/login', active:'active'},
        {id: 3, name: 'Signup', path: '/register', active: 'active'},
        {id: 4, name: 'Products', path: '/products', active:'active'},
        {id: 5, name: 'About', path: '/about', active:'active'}
    ]; // {} defines js object. 

    const productList = [
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


    return (
        <div className='container-fluid'>
            <Menu menuList={menuList} />
            <br/>
            <div className='container card-group'>
                <div className='row'>

                    {
                        productList.map(product => {
                            return <Product data = {product}/>
                        })
                    }

                </div>
            </div>      
        </div>
    );
};

export default App;