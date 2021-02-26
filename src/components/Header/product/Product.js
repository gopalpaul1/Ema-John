import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    
    const{img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="images" style={{width:"200px", height:"200px"}}/>
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <h4 style={{fontWeight:"400"}}>${price}</h4>
                <p><small>only {stock} left in stock-order soon</small></p>
                <button 
                    className="button" 
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div> 
        </div>
    );
};

export default Product;