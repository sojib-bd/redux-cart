import { ADD_TO_CART, REMOVE_FROM_CART } from "../cartActions";

const initialState = {
    cart: [],
    products: []
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newCart = [...state.cart, action.id];// new id is added to the empty cart
            return { cart: newCart }

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);//remove the id from the cart
            return { cart: remainingCart }

        default:
            return state
    }
}

export default cartReducers;