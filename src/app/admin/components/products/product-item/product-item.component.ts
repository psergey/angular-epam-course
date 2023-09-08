import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

import { Product } from "../../../../products/models/product";

@Component({
    selector: 'app-product-item',
    standalone: true,
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
    @Input({ required: true }) product!: Product;
    @Output() editProduct = new EventEmitter<Product>();

    onEditProduct(): void {
        this.editProduct.emit(this.product);
    }
}