import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Student, students} from '../components/parent-child/students.data';
import {delay} from 'rxjs/operators';

@Injectable()
export class StudentsService {

  behaviorSubject = new BehaviorSubject<number>(0);

  constructor() {
    this.behaviorSubject.next(this.behaviorSubject.getValue() + 1);
  }

  getStudents(): Observable<Student[]> {
    return of(students).pipe(delay(500));
  }
}
