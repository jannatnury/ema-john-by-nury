import React from 'react';
import './Product.css'

const Product = (props) => {
    const handleCart=()=>{
        console.log('clicked');
    }
    const {seller,name,price,img,ratings}=props.product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-details'>
            <h4>Name:{name}</h4>
            <p>Price: ${price}</p>
            <p><small>Manufecturer:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={handleCart} className='product-btn'>Add to cart</button>
        </div>
    );
};

export default Product;