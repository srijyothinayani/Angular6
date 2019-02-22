import { RouterModule } from '@angular/router';
import { NgModule, Testability } from '@angular/core';

import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { TestComponent } from './test/test.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomecomponentComponent },
      { path: 'test', component: TestComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


