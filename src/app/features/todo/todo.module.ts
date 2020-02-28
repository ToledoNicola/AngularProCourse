import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo.component";
import { StoreModule } from "@ngrx/store";
import * as fromTodo from "./state/reducers/todo.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from "./state/effects/todo.effects";
import { TodosComponent } from "./containers/todos/todos.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@NgModule({
  declarations: [TodoComponent, TodosComponent, NewTodoComponent, TodosListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoModule {}
