import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PerformanceRoutingModule } from "./performance-routing.module";
import { PerformanceComponent } from "./performance.component";
import { UsersComponent } from "./containers/users/users.component";
import { InputComponent } from "./components/input/input.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { PurePipe } from "./pipes/pure.pipe";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PerformanceComponent,
    UsersComponent,
    InputComponent,
    UsersListComponent,
    PurePipe
  ],
  imports: [CommonModule, ReactiveFormsModule, PerformanceRoutingModule]
})
export class PerformanceModule {}
