import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CartComponent } from "./components/cart.component";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        CartComponent,
        CartItemComponent
    ],
    exports: [
        CartComponent
    ]
})
export class CartsModule {}