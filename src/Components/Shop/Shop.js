import React from 'react';
import Product from '../Product/Product';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';


const Shop = (props) => {

    const { products, addToCart } = props

    console.log("from shop:", props)

    return (
        <div>
            <h1>This is shop.</h1>
            {
                products.map(pd => <Product
                    key={pd.id}
                    product={pd}
                    addToCart={addToCart}
                />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {

    addToCart: addToCart

}

//const connectToShop = connect(mapStateToProps, mapDispatchToProps)(Shop)

export default connect(mapStateToProps, mapDispatchToProps)(Shop);