import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo.component";
import { StoreModule } from "@ngrx/store";
import * as fromTodo from "./state/reducers/todo.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from "./state/effects/todo.effects";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoModule {}
