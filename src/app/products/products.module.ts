import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { ProductListComponent, ProductItemComponent, ProductDetailsComponent } from "./components";
import { CartModule } from "../cart/cart.module";
import { FontSizeClickChangerDirective } from "../shared/derectives/fontsize-click-changer.directive";
import { OrderByPipe } from "../shared/pipes/order-by.pipe";
import { ProductsRoutingModule } from "./products-routes.module";
import { productsReducer, productsStoreKey } from "./store/products.reducer";
import { ProductEffects } from "./store/products.effects";

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        CartModule,
        FontSizeClickChangerDirective,
        OrderByPipe,
        StoreModule.forFeature(productsStoreKey, productsReducer),
        EffectsModule.forFeature([ProductEffects]),
    ],
    declarations: [
        ProductListComponent,
        ProductItemComponent,
        ProductDetailsComponent,
    ],
    exports: [
        ProductListComponent,
        ProductsRoutingModule
    ]
})
export class ProductsModule {}