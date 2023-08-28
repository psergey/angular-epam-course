import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { CartsModule } from "../carts/carts.module";
import { FontSizeClickChangerDirective } from "../shared/derectives/fontsize-click-changer.directive";
import { OrderByPipe } from "../shared/pipes/order-by.pipe";

@NgModule({
    imports: [
        CommonModule,
        CartsModule,
        FontSizeClickChangerDirective,
        OrderByPipe
    ],
    declarations: [
        ProductListComponent,
        ProductItemComponent 
    ],
    exports: [
        ProductListComponent
    ]
})
export class ProductsModule {}