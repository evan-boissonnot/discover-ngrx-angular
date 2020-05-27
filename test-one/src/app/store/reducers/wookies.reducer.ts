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
  on(WookiesActions.addWookie, state => ({...state})),
  on(WookiesActions.loadWookiesSuccess, (state, { wookies }) => ( { ids: wookies.map(item => item.id), entities: wookies } )),
  on(WookiesActions.addWookieSuccess, (state, { wookie }) => {
    const newState = {...state};
    newState.entities = [...state.entities];
    newState.entities.push(wookie);

    return {
      ids: newState.entities.map(item => item.id),
      entities: newState.entities
    };
  })
);


