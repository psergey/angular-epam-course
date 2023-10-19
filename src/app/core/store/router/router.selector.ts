import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from "@ngrx/store";
  
export const router = createFeatureSelector<fromRouter.RouterReducerState<any>>(fromRouter.DEFAULT_ROUTER_FEATURENAME);

const {
    selectQueryParams,    // select the current route query params
    selectQueryParam,     // factory function to select a query param
    selectRouteParams,    // select the current route params
    selectRouteParam,     // factory function to select a route param
    selectRouteData,      // select the current route data
    selectUrl,            // select the current url
} = fromRouter.getRouterSelectors(router);