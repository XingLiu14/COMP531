import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';

import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

export const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: AuthComponent},
  {path: 'landing', component: AuthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AuthComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
