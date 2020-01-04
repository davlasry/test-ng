import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs/';

import {GetStudents, StudentsState} from '../reducers';
import {catchError, filter, switchMap, take, tap} from 'rxjs/operators';

@Injectable()
export class StudentsGuard implements CanActivate {
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

  canActivate(): Observable<boolean> {
    console.log('inside guard')
    return this.getFromStoreOrAPI().
      pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }
}
