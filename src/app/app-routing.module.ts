import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentChildComponent} from './components/parent-child/parent-child.component';
import {FormComponent} from './components/form/form.component';
import {DynamicCompsComponent} from './components/dynamic-comps/dynamic-comps.component';
import {DirectivesComponent} from './components/directives/directives.component';
import {StudentsGuard} from './guards/students.guard';
import {StudentsResolver} from './resolvers/students.resolver';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'parent-child',
    pathMatch: 'full'
  },
  {
    path: 'parent-child',
    component: ParentChildComponent,
    // canActivate: [StudentsGuard]
    resolve: {students: StudentsResolver}
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'dynamic-comps',
    component: DynamicCompsComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
