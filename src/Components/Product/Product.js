import React from 'react';

const Product = (props) => {
    const { id, name } = props.product;
    return (
        <div style={{ border: '1px solid tomato', marginBottom: 10, paddingBottom: 10 }}>
            <p>{name}</p>
            <button>ADD TO CART</button>
        </div>
    );
};

export default Product;