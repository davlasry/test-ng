import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Student} from '../students.data';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit, AfterViewInit {
  @Input() student: Student;

  /* Reference to the TemplateRef projected inside with ng-content */
  @ContentChild('studentCardButton', {static: false})
  studentCardButton: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.studentCardButton);
  }

}
