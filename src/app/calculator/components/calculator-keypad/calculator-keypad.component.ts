import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-calculator-keypad",
  templateUrl: "./calculator-keypad.component.html",
  styleUrls: ["./calculator-keypad.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorKeypadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
