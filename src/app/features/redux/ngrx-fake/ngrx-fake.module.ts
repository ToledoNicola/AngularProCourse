import { NgModule, ModuleWithProviders } from "@angular/core";
import { StoreService } from "./store.service";
import { ReducersStore } from "./tokens";

@NgModule()
export class NgrxFakeModule {
  static forRoot(reducers): ModuleWithProviders {
    return {
      ngModule: NgrxFakeModule,
      providers: [
        StoreService,
        {
          provide: ReducersStore,
          useValue: reducers
        }
      ]
    };
  }
}
