import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppData {
  constructor() { }
  get repo() {
    return of({ full_name: 'test' });
  }
  get readme() {
    return of('');
  }
}
