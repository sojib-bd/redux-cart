import { createStore } from "redux";
import cartReducers from "../actions/reducers/cartReducers";


export const cartStore = createStore(cartReducers)