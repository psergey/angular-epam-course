import { Routes } from "@angular/router";

import { AdminComponent } from "./admin/admin.component";
import { ProductListComponent, ProductFormComponent, AdminDashboardComponent } from "./components";
import { productResolver } from "./resolvers/product.resolver";

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'products',
                        component: ProductListComponent
                    },
                    {
                        path: 'products/add',
                        component: ProductFormComponent
                    },
                    {
                        path: 'products/edit/:id',
                        component: ProductFormComponent,
                        resolve: {
                            product: productResolver
                        }
                    },
                    { 
                        path: '',
                        component: AdminDashboardComponent
                    }
                ]
            }
        ]
    }
]