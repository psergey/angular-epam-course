import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { CartItem } from "../../models/cartItem";

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
    @Input() item!: CartItem;
    @Output() removeItem = new EventEmitter();
    @Output() updateItemQuantity: EventEmitter<number> = new EventEmitter<number>();

    onAddItemQuantity(): void {
        this.updateItemQuantity.emit(1);
    }

    onRemoveItemQuantity(): void {
        this.updateItemQuantity.emit(-1);
    }

    onRemoveItem(): void {
        this.removeItem.emit();
    }
}