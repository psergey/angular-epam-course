import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CartComponent } from "./components/cart.component";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { SharedModule } from "../shared/shared.module";
import { OrderByPipe } from "../shared/pipes/order-by.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        OrderByPipe
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