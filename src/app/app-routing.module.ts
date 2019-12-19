import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentChildComponent} from './components/parent-child/parent-child.component';
import {FormComponent} from './components/form/form.component';
import {DynamicCompsComponent} from './components/dynamic-comps/dynamic-comps.component';
import {DirectivesComponent} from './components/directives/directives.component';


const routes: Routes = [
  {
    path: 'parent-child',
    component: ParentChildComponent
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
