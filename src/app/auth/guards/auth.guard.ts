import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Route, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    const role = route.data['role'] as string;
     
    if (authService.isLoggedIn && authService.isInRole(role)) {
        return true;
    }

    router.navigate(['/login']);
    return false;
}