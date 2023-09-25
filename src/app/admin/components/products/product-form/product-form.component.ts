import { Component, inject, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ProductsService } from "../../../../products/services/products.service";
import { Product } from "../../../../products/models/product";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
    @Input({required: true}) product: Product = { id: '', name: '', description: '', price: 0, imageUrl: '', inStock: true };// resolver + withComponentInputBinding

    private productService: ProductsService = inject(ProductsService)
    private route: ActivatedRoute = inject(ActivatedRoute)
    private router: Router = inject(Router)

    ngOnInit(): void {
        this.product = this.product ? this.product : {...(this.product as Product)};
        // resolver + data
        // this.route.data.subscribe(data => {
        //     this.product = data['product'] as Product;
        // });
    }

    onSaveProduct(): void {
        const product = { ...this.product };
        const method = product.id ? 'updateProduct' : 'addProduct';

        this.productService[method](product)
            .subscribe(response => {
                if (product.id) {
                    this.router.navigate(['/admin/products', { id: product.id }]);
                }
                else {
                    this.onGoBack();
                }
            });
    }

    onGoBack(): void {
        this.router.navigate(['/admin/products']);
    }
}
