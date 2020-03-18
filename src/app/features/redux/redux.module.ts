import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxRoutingModule } from './redux-routing.module';
import { ReduxComponent } from './redux.component';


@NgModule({
  declarations: [ReduxComponent],
  imports: [
    CommonModule,
    ReduxRoutingModule
  ]
})
export class ReduxModule { }
