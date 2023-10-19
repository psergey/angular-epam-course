import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRouter from '@ngrx/router-store';

import { ProductsState, productsStoreKey } from "./products.reducer";
import { router } from "../../core/store/router/router.selector";

const products = createFeatureSelector<ProductsState>(productsStoreKey);

const {
    selectRouteParam,     // factory function to select a route param
} = fromRouter.getRouterSelectors(router);

export const selectProducts = createSelector(
    products, 
    state => [...state.products]
);

export const selectSelectedProductId = selectRouteParam('id');

export const selectSingleProduct = createSelector(
    products,
    selectSelectedProductId,
    (productsState, productId) => productsState.products.find(item => item.id == productId)
);