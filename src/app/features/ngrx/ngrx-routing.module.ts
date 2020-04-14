import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NgrxComponent } from "./ngrx.component";

const routes: Routes = [
  {
    path: "",
    component: NgrxComponent,
    children: [
      {
        path: "",
        redirectTo: "counter",
        pathMatch: "full",
      },
      {
        path: "calculator",
        loadChildren: () =>
          import("./calculator/calculator.module").then(
            (m) => m.CalculatorModule
          ),
      },
      {
        path: "todo",
        loadChildren: () =>
          import("./todo/todo.module").then((m) => m.TodoModule),
      },
      {
        path: "counter",
        loadChildren: () =>
          import("./counter/counter.module").then((m) => m.CounterModule),
      },
      {
        path: "movies",
        loadChildren: () =>
          import("./movies/movies.module").then((m) => m.MoviesModule),
      },
      {
        path: "cart",
        loadChildren: () =>
          import("./cart/cart.module").then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxRoutingModule {}
