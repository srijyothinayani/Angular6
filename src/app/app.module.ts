import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TestComponent,
    HomecomponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
