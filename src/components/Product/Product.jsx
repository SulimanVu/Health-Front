import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../features/productSlice';
import './product.css'

const Product = () => {
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct())
    })
    return (
        <div className='main'>
            {products.map((product, index) => {
                return(
                    <div key={index} className='product'>
                        <h1>{product.title}</h1>
                        <h2>{product.discription}</h2>
                        <h3>{product.calories} ккал на 100г.</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default Product;