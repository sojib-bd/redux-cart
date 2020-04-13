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
            const newCart = [...state.cart, action.id];// new id is added to the empty cart
            return { ...state, cart: newCart }

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);//remove the id from the cart
            return { ...state, cart: remainingCart }

        default:
            return state
    }
}

export default cartReducers;