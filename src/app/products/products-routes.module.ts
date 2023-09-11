import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductDetailsComponent, ProductListComponent } from "./components";
import { productDetailsTitleResolver } from "./resolvers";

const routes: Routes = [
    {
        path: 'products',
        title: 'Shop - Products',
        component: ProductListComponent
    },
    {
        path: 'products/:id',
        title: productDetailsTitleResolver,
        component: ProductDetailsComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule { }
