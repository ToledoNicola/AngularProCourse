import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ReduxComponent } from "./redux.component";

const routes: Routes = [
  {
    path: "",
    component: ReduxComponent,
    children: [
      {
        path: "counter",
        loadChildren: () =>
          import("./counter/counter.module").then(m => m.CounterModule)
      },
      {
        path: "",
        redirectTo: "counter",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReduxRoutingModule {}
