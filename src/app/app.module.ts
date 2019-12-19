import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { FormComponent } from './components/form/form.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DynamicCompsComponent } from './components/dynamic-comps/dynamic-comps.component';
import { StudentsComponent } from './components/parent-child/students-list/students.component';
import { StudentComponent } from './components/parent-child/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentChildComponent,
    FormComponent,
    DirectivesComponent,
    DynamicCompsComponent,
    StudentsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
