import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { WookiesActionsType, addWookie } from '../store/actions/wookie.actions';
import { Wookie } from '../core/models/wookie';

@Component({
  selector: 'app-wookie-add',
  templateUrl: './wookie-add.component.html',
  styleUrls: ['./wookie-add.component.css']
})
export class WookieAddComponent implements OnInit {
  wookie: Wookie = new Wookie();

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {
  }

  addOne(): void {
    // two ways to dispatch
    this.store.dispatch( addWookie({ wookie: this.wookie} )); // { type: WookiesActionsType.addOne, wookie: this.wookie } );
    this.wookie = new Wookie();
  }
}
