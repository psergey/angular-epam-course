import { Routes } from "@angular/router";

import { isCartNotEmptyGuard } from "./orders/guards/is-cart-not-empty.guard";
import { PageNotFound } from "./pages/not-found/not-found.component";
import { AuthComponent } from "./auth/components/auth.component";
import { authGuard } from "./auth/guards/auth.guard";

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
        // смущает название *.module, это ведь не модуль, а массив роутов
        loadChildren: () => import('./admin/admin-routes.module').then(r => r.adminRoutes),
        canMatch: [authGuard],
        data: {
            role: 'admin'
        }
    },
    {
        path: 'login',
        component: AuthComponent,
    },
    {
        path: '**',
        component: PageNotFound,
        title: 'Page Not Found'
    }
];
