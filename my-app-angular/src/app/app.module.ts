import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
//import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavModule, MatMenuModule, MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ChangeTextDirective } from './change-text.directive';

import { SqrtPipe } from './app.sqrt';
import {MyserviceService} from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
