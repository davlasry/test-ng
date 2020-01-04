import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { FormComponent } from './components/form/form.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DynamicCompsComponent } from './components/dynamic-comps/dynamic-comps.component';
import { StudentsComponent } from './components/parent-child/students-list/students.component';
import { StudentComponent } from './components/parent-child/student/student.component';
import {ChildModuleModule} from './child-module/child-module.module';
import {StudentsService} from './services/students.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {StudentsGuard} from './guards/students.guard';
import {StudentsResolver} from './resolvers/students.resolver';

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
    AppRoutingModule,
    ChildModuleModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    StudentsService,
    StudentsGuard,
    StudentsResolver,
    {
      provide: LOCALE_ID, useValue: 'fr'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
