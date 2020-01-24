import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CalculatorRoutingModule } from "./calculator-routing.module";
import { CalculatorPageComponent } from "./calculator-page.component";
import { CalculatorComponent } from "./containers/calculator/calculator.component";
import { CalculatorKeypadComponent } from "./components/calculator-keypad/calculator-keypad.component";
import { StoreModule } from "@ngrx/store";
import * as fromCalculator from "./state/reducers/calculator.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CalculatorEffects } from "./state/effects/calculator.effects";

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
      fromCalculator.reducer
    ),
    EffectsModule.forFeature([CalculatorEffects])
  ]
})
export class CalculatorModule {}
