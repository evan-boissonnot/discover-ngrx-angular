import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';
import { Wookie } from '../core/models/wookie';
import { WookiesActionsType } from '../store/actions/wookie.actions';

@Component({
  selector: 'app-wookies',
  templateUrl: './wookies.component.html',
  styleUrls: ['./wookies.component.css']
})
export class WookiesComponent implements OnInit {
  wookies$: Observable<Wookie[]>;


  constructor(private store: Store<fromStore.State>) {
    this.store.dispatch({type: WookiesActionsType.load});
  }

  ngOnInit(): void {
   this.wookies$ = this.store.pipe(select(fromStore.getWookies));
  }

}
