import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../services/students.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // providers: [
  //   {
  //     provide: StudentsService,
  //     useValue: {
  //       behaviorSubject: 999
  //     }
  //   }
  // ]
})
export class ChildComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    // this.studentsService.behaviorSubject.subscribe(val => console.log(val));
    console.log(this.studentsService);
    // this.studentsService.behaviorSubject.next(444);
  }

}
