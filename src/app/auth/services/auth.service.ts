import { Injectable } from "@angular/core";
import { emitWarning } from "process";
import { delay, Observable, of, tap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private userRole?: string;

    get role(): string | undefined {
        return this.userRole; 
    }

    isLoggedIn: boolean = false;

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
        this.userRole = undefined;
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