import { Action, createReducer, on } from "@ngrx/store";
import { CalculatorActions } from "../actions";

export enum Operators {
  somma,
  moltiplicazione,
  sottrazione,
  divisione,
  risultato
}

// manca il +-
export enum Functions {
  cancella,
  percentuale
}

export interface CalculatorUiState {
  display: number;
  activeOperator: Operators;
  firstNumber: number;
  secondNumber: number;
}

export const initialState: CalculatorUiState = {
  display: 0,
  activeOperator: null,
  firstNumber: 0,
  secondNumber: 0
};

const calculatorUiReducer = createReducer(
  initialState,

  on(CalculatorActions.enteredNumber, (state, action) => {
    let result = "" + state.display + action.number;
    let newFirstNumber: number, newSecondNumber: number, newDisplay: number;

    if (!state.firstNumber) {
      newFirstNumber = action.number;
      newDisplay = newFirstNumber;
    } else if (state.firstNumber && !state.activeOperator) {
      // concateno numeri al primo numero perche l'operatore non è ancora attivo
      const tempNumber = "" + state.firstNumber + action.number;
      newFirstNumber = Number(tempNumber);
      newDisplay = newFirstNumber;
    }
    return {
      ...state,
      display: newDisplay,
      firstNumber: newFirstNumber
    };
  }),
  on(CalculatorActions.reset, state => initialState),
  on(CalculatorActions.loadCalculators, state => state),
  on(CalculatorActions.loadCalculatorsSuccess, (state, action) => state),
  on(CalculatorActions.loadCalculatorsFailure, (state, action) => state)
);
export function reducer(state: CalculatorUiState | undefined, action: Action) {
  return calculatorUiReducer(state, action);
}
