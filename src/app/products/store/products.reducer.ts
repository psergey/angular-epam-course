import { createReducer, on } from "@ngrx/store";

import { Product } from "../models/product";
import * as ProductActions from "./products.actions";

export const productsStoreKey = 'products';

export interface ProductsState {
    products: Product[];
    loading: boolean;
    errorMessage: string;
}

const intitialState: ProductsState = {
    products: [],
    loading: false,
    errorMessage: '',
};

export const productsReducer = createReducer(
    intitialState,
    on(ProductActions.opened, (state) => ({
        ...state,
        products: [],
        loading: true
    })),
    on(ProductActions.productsLoadedSuccess, (state, { products }) => ({
        ...state,
        products: [...products],
        loading: false       
    })),
    on(ProductActions.productsLoadedFail, (state, { error }) => ({
        ...state,
        errorMessage: error,
        loading: false       
    }))
);