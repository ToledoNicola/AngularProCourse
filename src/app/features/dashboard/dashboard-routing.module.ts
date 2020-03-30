import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { AuthGuard } from "src/app/core/auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    // canActivateChild: [AuthGuard],
    // canActivate: [AuthGuard],
    children: [
      {
        path: "rxjs",
        loadChildren: () =>
          import("../reactive/rxjs.module").then(m => m.RxjsModule)
      },
      // {
      //   path: "reactive", //todo: da fare
      //   loadChildren: () =>
      //     import("./features/reactive/rxjs.module").then(m => m.RxjsModule)
      // },
      {
        path: "performance",
        loadChildren: () =>
          import("../performance/performance.module").then(
            m => m.PerformanceModule
          )
      },

      {
        path: "redux",
        loadChildren: () =>
          import("../redux/redux.module").then(m => m.ReduxModule)
      },
      {
        path: "ngrx",
        loadChildren: () =>
          import("../ngrx/ngrx.module").then(m => m.NgrxModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
