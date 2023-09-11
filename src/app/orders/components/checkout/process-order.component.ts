import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LocalStorageService } from "../../../core/services/local-storage.service";
import { CartItem } from "../../../cart/models/cartItem";
import { Router } from "@angular/router";

@Component({
    standalone: true,
    templateUrl: './process-order.component.html',
    styleUrls: ['./process-order.component.scss'],
    imports: [CommonModule]
})
export class ProcessOrderComponent implements OnInit {
    private storage: LocalStorageService = inject(LocalStorageService);
    private router: Router = inject(Router);

    products!: CartItem[]

    ngOnInit(): void {
        this.products = this.storage.getItem('cart-items') as CartItem[];
    }

    get totalAmount(): number {
        return this.products.reduce((total, item) => total + (item.price * item.amount), 0);
    }

    onOrderComplete(): void {
        this.storage.removeItem('cart-items');
        this.router.navigate(['/']);
    }
}