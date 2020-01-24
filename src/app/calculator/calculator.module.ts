import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CalculatorRoutingModule } from "./calculator-routing.module";
import { CalculatorPageComponent } from "./calculator-page.component";
import { CalculatorComponent } from "./containers/calculator/calculator.component";
import { CalculatorKeypadComponent } from "./components/calculator-keypad/calculator-keypad.component";

@NgModule({
  declarations: [
    CalculatorPageComponent,
    CalculatorComponent,
    CalculatorKeypadComponent
  ],
  imports: [CommonModule, CalculatorRoutingModule]
})
export class CalculatorModule {}
