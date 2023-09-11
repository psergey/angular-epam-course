import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

import { AuthService } from "../services/auth.service";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-login',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})  
export class AuthComponent implements OnInit {
    private router: Router = inject(Router);
    authService: AuthService = inject(AuthService);
    
    message: string = "";
    selectedRole: string = 'user';
    
    ngOnInit(): void {
        this.message = this.loggedInUser;
    }

    get loggedInUser(): string {
        return this.authService.isLoggedIn ? `Logged as ${this.authService.role}` : 'Anonymous user'
    }

    onRoleSelected(value:string): void {
        this.selectedRole = value;
    }

    onLogin(): void {
        const isAdmin = this.selectedRole === 'admin';
        this.authService.login(isAdmin).subscribe(o => {
            this.message = `Logged as ${this.authService.role ?? 'anonymous'}`
            if (this.authService.isLoggedIn) {
                this.router.navigate([this.authService.redirectUrl()]);
            }
        })
    }

    onLogout(): void {
        this.authService.logout();
        this.message = this.loggedInUser;
    }
}