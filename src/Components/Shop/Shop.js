import React from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const product = [
        { id: 1, name: 'Lenovo', category: 'laptop' },
        { id: 2, name: 'Dell', category: 'laptop' },
        { id: 3, name: 'HP', category: 'laptop' },
        { id: 4, name: 'Toshiba', category: 'laptop' },
        { id: 5, name: 'ASUS', category: 'laptop' },
        { id: 6, name: 'DOEL', category: 'laptop' }
    ]

    return (
        <div>
            <h1>This is shop.</h1>
            {
                product.map(pd => <Product product={pd} />)
            }
        </div>
    );
};

export default Shop;