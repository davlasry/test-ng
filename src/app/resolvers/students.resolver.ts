import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import {Observable, of} from 'rxjs';
import {catchError, delay, filter, switchMap, take, tap} from 'rxjs/operators';
import {GetStudents, StudentsState} from '../reducers';
import {Store} from '@ngrx/store';


@Injectable()
export class StudentsResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<StudentsState>) {}

  getFromStoreOrAPI(): Observable<any> {
    return this.store
      .select(state => state.students.list)
      .pipe(
        tap((data: any) => {
            console.log('data', data)
            if (!data.length) {
              this.store.dispatch(new GetStudents());
            }
          },
          filter((data: any) => data.length),
          // take(1)
        ));
  }

  resolve() {
    console.log('inside resolver');
    return this.getFromStoreOrAPI().
      pipe(
        tap(val => console.log('val inside of resolver', val)),
        filter(val => val.length),
        take(1)
      );
    // return of('Hello Alligator!').pipe(delay(2000));
  }
}
