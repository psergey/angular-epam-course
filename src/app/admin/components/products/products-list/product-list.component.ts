import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { Observable } from "rxjs";

import { Product } from "../../../../products/models/product";
import { ProductsService } from "../../../../products/services/products.service";
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, ProductItemComponent],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  implements OnInit {
    products$!: Observable<Product[]>;

    private productService: ProductsService = inject(ProductsService);
    private router: Router = inject(Router);
    private route: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit(): void {
        this.products$ = this.productService.getProducts();
    }

    onEditProduct({ id }: Product): void {
        const link = ['../products/edit', id];
        this.router.navigate(link, { relativeTo: this.route });
    }
}