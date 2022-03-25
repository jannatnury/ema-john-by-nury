import React from 'react';
import './Product.css'

const Product = (props) => {
    const {seller,name,price,img,ratings}=props.product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <h4>Name:{name}</h4>
            <p>Price:${price}</p>
            <p><small>Manufecturer:{seller}</small></p>
            <p><small>Ratings:{ratings}</small></p>
        </div>
    );
};

export default Product;