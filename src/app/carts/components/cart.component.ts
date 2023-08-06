import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { Product } from "../../core/models/product/product";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
  })
export class CartComponent implements OnInit {

  public items: Product[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.cartService.addProductSubject$.subscribe(item => {
      this.items.push(item)
    });
  }

  trackByProductItems = (index: number, item: Product) => {item.id};
}