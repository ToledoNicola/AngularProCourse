import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
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
    path: "redux",
    loadChildren: () =>
      import("./features/redux/redux.module").then(m => m.ReduxModule)
  },
  {
    path: "ngrx",
    loadChildren: () =>
      import("./features/ngrx/ngrx.module").then(m => m.NgrxModule)
  },

  {
    path: "",
    redirectTo: "performance",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
