import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    return (
        <div className="cart-container">
            <div className="order-count">
                <h2>Orders Summary</h2>
                <h4>Items Ordered: {cart.length}</h4>
            </div>
            <div>
                <p>Shipping & Handling: </p>
                <p>Total Before Tax: </p>
                <h4 style={{color:"crimson"}}>Order Total:</h4>
            </div>
            <button className="button">Review your Order</button>
        </div>
    );
};

export default Cart;