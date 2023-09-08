import { Injectable } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";

@Injectable()
export class AuthService {
    private isLoggedIn: boolean = false;

    login(isAdmin: boolean = false): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(() => this.isLoggedIn = true)
        );
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}