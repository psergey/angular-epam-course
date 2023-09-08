import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ProductListComponent, ProductItemComponent, ProductDetailsComponent } from "./components";
import { CartModule } from "../cart/cart.module";
import { FontSizeClickChangerDirective } from "../shared/derectives/fontsize-click-changer.directive";
import { OrderByPipe } from "../shared/pipes/order-by.pipe";
import { ProductsRoutingModule } from "./products-routes.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CartModule,
        FontSizeClickChangerDirective,
        OrderByPipe
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