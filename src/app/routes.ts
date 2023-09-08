import { Routes } from "@angular/router";

import { isCartNotEmptyGuard } from "./orders/guards/is-cart-not-empty.guard";
import { PageNotFound } from "./pages/not-found/not-found.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    },
    {
        path: 'order',
        canActivate: [isCartNotEmptyGuard],
        loadComponent: () => import('./orders/components/checkout/process-order.component').then(c => c.ProcessOrderComponent)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin-routes.module').then(r => r.adminRoutes),
        //canMatch: [authGuard]
    },
    {
        path: '**',
        component: PageNotFound,
        title: 'Page Not Found'
    }
];