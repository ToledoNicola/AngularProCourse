import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TodoEffects } from "./store/effects/todo.effects";
import { TodosComponent } from "./containers/todos/todos.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NewTodoComponent } from "./components/new-todo/new-todo.component";
import { TodosListComponent } from "./components/todos-list/todos-list.component";
import { EntityDefinitionService, EntityDataService } from "@ngrx/data";
import { entityMetadata } from "./entity-metadata";
import { TodosDataService } from "./data/todos-data.service";
import { TodoService } from "./services/todo.service";
import { ReactiveFormsModule } from "@angular/forms";
import { TotTodosComponent } from "./containers/tot-todos/tot-todos.component";
import { TodosWithEntityComponent } from "./containers/todos-with-entity/todos-with-entity.component";
import { reducersMap, todoFeatureKey } from "./store/reducers";

@NgModule({
  declarations: [
    TodoComponent,
    TodosComponent,
    NewTodoComponent,
    TodosListComponent,
    TotTodosComponent,
    TodosWithEntityComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(todoFeatureKey, reducersMap),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [TodosDataService, TodoService]
})
export class TodoModule {
  constructor(
    eds: EntityDefinitionService,
    edatas: EntityDataService,
    todoDataService: TodosDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    edatas.registerService("Todo", todoDataService);
  }
}
