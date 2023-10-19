import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CartListComponent, CartItemComponent } from "./components";
import { SharedModule } from "../shared/shared.module";
import { OrderByPipe } from "../shared/pipes/order-by.pipe";
import { CartComponent } from "./cart.component";
import { CartRouteModule } from "./cart-routes.module";
import { StoreModule } from "@ngrx/store";
import { cartReducer, cartStoreKey } from "./store/cart.reducer";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CartRouteModule,
        SharedModule,
        OrderByPipe,
        StoreModule.forFeature(cartStoreKey, cartReducer)
    ],
    declarations: [
        CartComponent,
        CartListComponent,
        CartItemComponent
    ],
    exports: [
    ]
})
export class CartModule {}