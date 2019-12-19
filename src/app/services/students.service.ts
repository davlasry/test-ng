import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Student, students} from '../components/parent-child/students.data';

@Injectable()
export class StudentsService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(students);
  }
}
