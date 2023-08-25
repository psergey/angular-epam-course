import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CartService } from "../services/cart.service";
import { CartItem } from "../models/cartItem";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
  })
export class CartComponent implements OnInit {

  public items: CartItem[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartService.itemsChangedSubject$.subscribe(items => {
      this.items = items;
    });
  }

  get totalAmount(): number {
    return this.cartService.totalCost;
  }

  get priceLegend(): any {
    return {
      red: this.totalAmount >= 3000, 
      yellow: this.totalAmount > 100 && this.totalAmount < 3000
    }
  }

  onUpdateItemQuantity(item: CartItem, val: number) {
    if (val > 0)
      this.cartService.increaseQuantity(item);
    if (val < 0)
      this.cartService.decreaseQuantity(item);
  }

  onRemoveItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  trackByProductItems = (index: number, item: CartItem) => {item.id};
}