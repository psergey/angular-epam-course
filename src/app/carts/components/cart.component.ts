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

  onUpdateItemQuantity(item: CartItem, val: number) {
    item.amount += val;
  }

  onRemoveItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  trackByProductItems = (index: number, item: CartItem) => {item.id};
}