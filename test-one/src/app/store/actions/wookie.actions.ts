import { createAction, props } from '@ngrx/store';
import { Wookie } from 'src/app/core/models/wookie';

export enum WookiesActionsType {
  load = '[Wookie] Load Wookies',
  loadSuccess = '[Wookie] Load Wookies Success',
  loadFailure = '[Wookie] Load Wookies Failure',
  addOne = '[Wookie] Add Wookie',
  addOneSuccess = '[Wookie] Add Wookie Success'
}

export const loadWookies = createAction(
  WookiesActionsType.load
);

export const loadWookiesSuccess = createAction(
  WookiesActionsType.loadSuccess,
  props<{ wookies: Wookie[] }>()
);

export const loadWookiesFailure = createAction(
  WookiesActionsType.loadFailure,
  props<{ error: any }>()
);

export const addWookie = createAction(
  WookiesActionsType.addOne,
  props<{ wookie: Wookie }>()
);

export const addWookieSuccess = createAction(
  WookiesActionsType.addOneSuccess,
  props<{ wookie: Wookie }>()
);

