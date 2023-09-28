import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    isLoggedIn: boolean = false;
    private userRole: string | null = null;

    get role(): string | null {
        return this.userRole; 
    }

    login(isAdmin: boolean = false): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(() => {
                this.isLoggedIn = true;
                this.userRole = isAdmin ? 'admin' : 'user';
            })
        );
    }

    logout(): void {
        this.isLoggedIn = false;
        this.userRole = null;
    }

    isInRole(role: string): boolean {
        return this.userRole === role;
    }

    redirectUrl(): string {
        if (this.isInRole('admin'))
            return '/admin'
        return '/';
    }
}