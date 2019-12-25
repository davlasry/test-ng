import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Student, students} from '../students.data';
import {StudentComponent} from '../student/student.component';
import {StudentsService} from '../../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  // already provided in the parent app component
  // providers: [
  //   StudentsService
  // ]
})
export class StudentsComponent implements OnInit, AfterViewInit {
  students: Student[];

  /* Reference to html element */
  @ViewChild('listTitle', {static: false})
  listElement: ElementRef;

  /* reference to single Component */
  @ViewChild(StudentComponent, {static: false})
  studentComponent: StudentComponent;

  /* reference to a list of Components */
  // @ViewChildren(StudentComponent)
  // studentsComponent: QueryList<StudentComponent>;

  /* reference to a list of Components ElementRefs */
  @ViewChildren(StudentComponent, {read: ElementRef})
  studentsComponent: QueryList<ElementRef>;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().pipe().subscribe( val => {
      this.students = val;
    });
    console.log('on ngOnInit Students');

    this.studentsService.behaviorSubject.subscribe(value => {
      console.log('StudentsComponent', value);
    });

    this.studentsService.behaviorSubject.next(555);
  }

  ngAfterViewInit() {
    console.log('on ngAfterViewInit Students');

    // console.log(this.listElement);
    // console.log(this.studentComponent);
    // console.log(this.studentsComponent);
    // this.studentsComponent.forEach(component => {
    //   console.log(component);
    // });
  }

}
