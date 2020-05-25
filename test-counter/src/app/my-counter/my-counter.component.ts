import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store/reducers';
import { counterSelector } from '../store/selectors/counter.selectors';
import { increment, decrement, reset } from '../store/actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<fromStore.State>) {
    this.count$ = store.pipe(select(counterSelector));
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
