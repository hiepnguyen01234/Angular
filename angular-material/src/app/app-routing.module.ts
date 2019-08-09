import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TestHttpComponent } from './test-http/test-http.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'mainPage', component: MainPageComponent},
  {path: 'testHttp', component: TestHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
