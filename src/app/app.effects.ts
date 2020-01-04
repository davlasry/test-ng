import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {mergeMap, map, catchError, timeout, delay} from 'rxjs/operators';
import {StudentsService} from './services/students.service';
import {EMPTY} from 'rxjs';

@Injectable()
export class AppEffects {
  @Effect()
  loadMovies$ = this.actions$
    .pipe(
      ofType('GetStudents'),
      mergeMap(() => this.studentsService.getStudents()
        .pipe(
          map(students => ({ type: 'GetStudentsSuccess', payload: students})),
          catchError(() => EMPTY)
        ))
    );

  constructor(private actions$: Actions, private studentsService: StudentsService) {}
}
