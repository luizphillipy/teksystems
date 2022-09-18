import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AdvisorComponent } from './advisor/advisor.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationsPageComponent } from './registrations-page/registrations-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AdvisorComponent,
    RegistrarComponent,
    NavigationComponent,
    RegistrationsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([

      {
        path: "student",
        component: StudentComponent
      },
      {
        path: "registrar",
        component: RegistrarComponent
      },
      {
        path: "advisor",
        component: AdvisorComponent
      }
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
