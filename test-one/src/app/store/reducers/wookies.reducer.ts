import { Action, createReducer, on } from '@ngrx/store';
import { Wookie } from 'src/app/core/models/wookie';
import * as WookiesActions from '../actions/wookie.actions';


export interface State {
  ids: number[];
  entities: Wookie[];
}

export const initialState: State = {
  entities: [],
  ids: []
};

export const reducer = createReducer(
  initialState,
  on(WookiesActions.loadWookies, state => ({...state})),
  on(WookiesActions.loadWookiesSuccess, (state, { data }) => ( { ids: data.map(item => item.id), entities: data } ))
);


