import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { CartsModule } from "../carts/carts.module";

@NgModule({
    imports: [
        CommonModule,
        CartsModule
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