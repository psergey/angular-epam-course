import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../../core/models/product/product";

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
  })
export class ProductItemComponent
{
    @Input() product!: Product 
    @Output() addProductEvent = new EventEmitter<Product>();

    onAddItem(item: Product): void {
        this.addProductEvent.emit(item);
    }
}