import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CalculatorRoutingModule } from "./calculator-routing.module";
import { CalculatorPageComponent } from "./calculator-page.component";
import { CalculatorComponent } from "./containers/calculator/calculator.component";
import { CalculatorKeypadComponent } from "./components/calculator-keypad/calculator-keypad.component";
import { StoreModule } from "@ngrx/store";
import * as fromCalculator from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { CalculatorEffects } from "./store/effects/calculator.effects";

@NgModule({
  declarations: [
    CalculatorPageComponent,
    CalculatorComponent,
    CalculatorKeypadComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    StoreModule.forFeature(
      fromCalculator.calculatorFeatureKey,
      fromCalculator.reducers
    ),
    EffectsModule.forFeature([CalculatorEffects])
  ]
})
export class CalculatorModule {}
