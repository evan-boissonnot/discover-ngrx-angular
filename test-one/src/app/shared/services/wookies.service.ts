import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
}
