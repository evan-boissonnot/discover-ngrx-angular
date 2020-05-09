import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';
import { Wookie } from '../core/models/wookie';

@Component({
  selector: 'app-wookies',
  templateUrl: './wookies.component.html',
  styleUrls: ['./wookies.component.css']
})
export class WookiesComponent implements OnInit {
  wookies$: Observable<Wookie[]>;


  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.wookies$ = this.store.select( state => state.wookies.entities);
  }

}
