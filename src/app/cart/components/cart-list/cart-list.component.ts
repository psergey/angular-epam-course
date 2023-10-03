import { Component, OnChanges, OnInit, SimpleChanges, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { CartService } from "../../services/cart.service";
import { CartItem } from "../../models/cartItem";
import { getCart, getCartTotal } from "../../store/cart.selector";
import * as CartActions from "../../store/cart.actions";

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss'],
  })
export class CartListComponent implements OnInit {

  private store: Store = inject(Store);

  items$: Observable<CartItem[]> = this.store.select(getCart);

  sortOptions: any[] = [
    {name: 'Price: Low to high', key: 'price', sortDirection: false},
    {name: 'Price: High to low', key: 'price', sortDirection: true},
    {name: 'Name', key: 'name', sortDirection: true},
    {name: 'Quantity', key: 'amount', sortDirection: false},
  ];

  selectedOrder: any = undefined;

  // constructor(private cartService: CartService) {
  // }

  ngOnInit(): void {
    // this.items = this.cartService.getItems();
    // this.cartService.itemsChangedSubject$.subscribe(items => {
    //   this.items = items;
    // });
  }

  get totalAmount$(): Observable<number> {
    return this.store.select(getCartTotal)
    //return this.cartService.totalCost;
  }

  priceLegend(totalAmount: number | null): any {
    // return {
    //   red: this.totalAmount >= 3000, 
    //   yellow: this.totalAmount > 100 && this.totalAmount < 3000
    // }

    return {
      red: totalAmount && totalAmount >= 3000, 
      yellow: totalAmount && totalAmount > 500 && totalAmount < 3000
    }
  }

  onUpdateItemQuantity(item: CartItem, val: number) {
    // if (val > 0)
    //   this.cartService.increaseQuantity(item);
    // if (val < 0)
    //   this.cartService.decreaseQuantity(item);
    if (val > 0) {
      this.store.dispatch(CartActions.increaseItemQuantities(item));
    } else {
      this.store.dispatch(CartActions.decreaseItemQuantities(item));
    }
  }

  onRemoveItem(item: CartItem) {
    this.store.dispatch(CartActions.removeItem(item));
    //this.cartService.removeItem(item);
  }

  trackByProductItems = (index: number, item: CartItem) => {item.id};
}