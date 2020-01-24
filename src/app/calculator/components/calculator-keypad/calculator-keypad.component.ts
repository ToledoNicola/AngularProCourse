import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-calculator-keypad",
  templateUrl: "./calculator-keypad.component.html",
  styleUrls: ["./calculator-keypad.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorKeypadComponent implements OnInit {
  @Output() selectedNumber = new EventEmitter();
  @Output() selectedOperator = new EventEmitter();
  @Output() selectedFunction = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleSelectedNumber(number: number) {
    this.selectedNumber.emit(number);
  }
  handleSelectedFunction(fun: string) {
    this.selectedFunction.emit(fun);
  }
  handleSelectedOperator(operator) {
    this.selectedOperator.emit(operator);
  }
}
