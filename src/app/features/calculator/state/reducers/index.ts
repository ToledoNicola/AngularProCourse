import * as fromCalculator from "./calculator.reducer";
import * as fromCalculatorUi from "./calculator-ui.reducer";

export const calculatorFeatureKey = "calculator";

export interface CalculatorModuleState {
  data: fromCalculator.CalculatorState;
  ui: fromCalculatorUi.CalculatorUiState;
}

export const reducers = {
  ui: fromCalculatorUi.reducer,
  data: fromCalculator.reducer
};
