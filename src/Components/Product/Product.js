import React from 'react';

const Product = (props) => {
    const { product, addToCart } = props
    return (
        <div style={{ border: '1px solid tomato', marginBottom: 10, paddingBottom: 10 }}>
            <p>{product.name}</p>
            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        </div>
    );
};

export default Product;