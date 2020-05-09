import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as fromStore from '../reducers';
import * as WookiesActions from '../actions/wookie.actions';
import { WookiesService } from 'src/app/shared/services/wookies.service';

// https://indepth.dev/how-to-start-flying-with-angular-and-ngrx/

@Injectable()
export class WookiesEffects {

  constructor(private actions$: Actions, private store: Store<fromStore.State>, private wookiesService: WookiesService) {}

  @Effect()
  loadWookies$ = createEffect(() => this.actions$.pipe(
    ofType(WookiesActions.WookiesActionsType.load),
    mergeMap( () => this.wookiesService.getAll()
                                       .pipe(
                                         map(movies => ({ type: WookiesActions.WookiesActionsType.loadSuccess, data: movies }))
                                       ))
  ));

}
