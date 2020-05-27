import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Wookie } from 'src/app/core/models/wookie';

@Injectable({
  providedIn: 'root'
})
export class WookiesService {

  constructor() { }

  getAll(): Observable<Wookie[]> {
    return of([
      { id: 1, name: 'Chewie'}
    ]);
  }

  addOne(wookie: Wookie): Observable<Wookie> {
    return of(wookie).pipe(delay(1000));
  }
}
