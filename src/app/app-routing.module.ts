import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "calculator",
    loadChildren: () =>
      import("./features/calculator/calculator.module").then(
        m => m.CalculatorModule
      )
  },
  {
    path: "rxjs",
    loadChildren: () =>
      import("./features/reactive/rxjs.module").then(m => m.RxjsModule)
  },
  // {
  //   path: "reactive", //todo: da fare
  //   loadChildren: () =>
  //     import("./features/reactive/rxjs.module").then(m => m.RxjsModule)
  // },
  {
    path: "performance",
    loadChildren: () =>
      import("./features/performance/performance.module").then(
        m => m.PerformanceModule
      )
  },
  {
    path: "todo",
    loadChildren: () =>
      import("./features/todo/todo.module").then(m => m.TodoModule)
  },
  {
    path: "redux",
    loadChildren: () =>
      import("./features/redux/redux.module").then(m => m.ReduxModule)
  },
  {
    path: "counter",
    loadChildren: () =>
      import("./features/counter/counter.module").then(m => m.CounterModule)
  },
  {
    path: "",
    redirectTo: "calculator",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
