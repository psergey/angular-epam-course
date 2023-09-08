import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

import { LocalStorageService } from "src/app/core/services/local-storage.service";

export const isCartNotEmptyGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const storage: LocalStorageService = inject(LocalStorageService);
    const router = inject(Router);

    if (storage.getItem('cart-items')?.length > 0) {
        return true;
    } 
    return router.parseUrl('/');;
}