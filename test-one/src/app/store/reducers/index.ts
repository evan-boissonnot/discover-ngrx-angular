import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromWookies from './wookies.reducer';


export interface State {

  wookies: fromWookies.State;
}

export const reducers: ActionReducerMap<State> = {
  wookies: fromWookies.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const selectWookies = (state: State) => state.wookies;

