import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentsService} from '../services/students.service';
import { ChildComponent } from '../child/child.component';



@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule
  ],
  exports: [ChildComponent],
  providers: [
    // StudentsService
  ]
})
export class ChildModuleModule { }
