import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [DashboardComponent, NavigationComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
