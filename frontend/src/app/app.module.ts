import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import * as Auth0 from 'auth0-web';

import { AppComponent } from './app.component';
import {ExamFormComponent} from './exams/exam-form.component';
import {ExamsComponent} from './exams/exams.component';
import {ExamsApiService} from './exams/exams-api.service';
import {CallbackComponent} from './callback.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule} from '@angular/material';

const appRoutes: Routes = [
  {path: 'callback', component: CallbackComponent},
  {path: 'new-exam', component: ExamFormComponent},
  {path: '', component: ExamsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ExamFormComponent,
    ExamsComponent,
    CallbackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: 'amethyst-lei.auth0.com',
      audience: 'https://online-exam.digituz.com.br',
      clientID: 'bxBezh0kdK9ojfaISe2ZNmP2LK2NBTln',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid profile manage:exams'
    });
  }
}
