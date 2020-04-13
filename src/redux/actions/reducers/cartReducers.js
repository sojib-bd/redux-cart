import { ADD_TO_CART, REMOVE_FROM_CART } from "../cartActions";

const initialState = {
    cart: [],
    products: [
        { id: 1, name: 'Lenovo', category: 'laptop' },
        { id: 2, name: 'Dell', category: 'laptop' },
        { id: 3, name: 'HP', category: 'laptop' },
        { id: 4, name: 'Toshiba', category: 'laptop' },
        { id: 5, name: 'ASUS', category: 'laptop' },
        { id: 6, name: 'DOEL', category: 'laptop' }
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }// new id is added to the empty cart
            const newCart = [...state.cart, newItem]
            return { ...state, cart: newCart }

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);//remove the id from the cart
            return { ...state, cart: remainingCart }

        default:
            return state
    }
}

export default cartReducers;