import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import * as fromStore from '../reducers';
import * as WookiesActions from '../actions/wookie.actions';
import { WookiesService } from 'src/app/shared/services/wookies.service';

// https://indepth.dev/how-to-start-flying-with-angular-and-ngrx/

// To help : https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

@Injectable()
export class WookiesEffects {

  constructor(private actions$: Actions, private store: Store<fromStore.State>, private wookiesService: WookiesService) {}

  @Effect()
  loadWookies$ = createEffect(() => this.actions$.pipe(
    ofType(WookiesActions.WookiesActionsType.load),
    mergeMap( () => this.wookiesService.getAll()
                                       .pipe(
                                         map(data => ({ type: WookiesActions.WookiesActionsType.loadSuccess, wookies: data }))
                                       ))
  ));

  addWookies$ = createEffect(() => this.actions$.pipe(
    ofType(WookiesActions.WookiesActionsType.addOne),
    switchMap(
      (action: any) => this.wookiesService.addOne(action.wookie).pipe(
        map(wookieItem => ({ type: WookiesActions.WookiesActionsType.addOneSuccess, wookie: wookieItem }))
      )
    )
  ));

}
