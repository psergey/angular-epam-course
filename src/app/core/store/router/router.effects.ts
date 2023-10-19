import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import * as RouterActions from "./router.actions";

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location) {
    }
    
    navigate$ = createEffect(() => 
        this.actions$.pipe(
            ofType(RouterActions.go),
            tap(state => {
                const { path, queryParams, extras } = {...state}
                this.router.navigate(path, { queryParams, ...extras });
            })
            ), 
            {
                dispatch: false
            }
        );
    
    back$ = createEffect(() => 
        this.actions$.pipe(
            ofType(RouterActions.back),
            tap(state => {
                console.log(state);
                this.location.back();
            })
            ), 
            {
                dispatch: false
            }
        );
}