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
      import("./features/rxjs/rxjs.module").then(m => m.RxjsModule)
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
