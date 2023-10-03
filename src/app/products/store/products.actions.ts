import { createAction, emptyProps, props } from "@ngrx/store";

import { Product } from "../models/product";

export const opened = createAction('[Products Page] Load Products');

export const productsLoadedSuccess = createAction('[Products Api] Products Loaded Success', props<{ products: Product[] }>());

export const productsLoadedFail = createAction('[Products Api] Products Loaded Fail', props<{ error: string }>());
