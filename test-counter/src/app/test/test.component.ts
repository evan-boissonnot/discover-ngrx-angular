import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { Observable } from 'rxjs';
import { counterSelector } from '../store/selectors/counter.selectors';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<fromStore.State>) {
    this.count$ = store.pipe(select(counterSelector));
  }

  ngOnInit(): void {
  }

}
