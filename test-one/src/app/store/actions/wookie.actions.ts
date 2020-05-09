import { createAction, props } from '@ngrx/store';
import { Wookie } from 'src/app/core/models/wookie';

export enum WookiesActionsType {
  load = '[Wookie] Load Wookies',
  loadSuccess = '[Wookie] Load Wookies Success',
  loadFailure = '[Wookie] Load Wookies Failure'
}

export const loadWookies = createAction(
  WookiesActionsType.load
);

export const loadWookiesSuccess = createAction(
  WookiesActionsType.loadSuccess,
  props<{ data: Wookie[] }>()
);

export const loadWookiesFailure = createAction(
  WookiesActionsType.loadFailure,
  props<{ error: any }>()
);

