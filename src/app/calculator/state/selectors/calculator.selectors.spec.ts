import * as fromCalculator from '../reducers/calculator.reducer';
import { selectCalculatorState } from './calculator.selectors';

describe('Calculator Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCalculatorState({
      [fromCalculator.calculatorFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
