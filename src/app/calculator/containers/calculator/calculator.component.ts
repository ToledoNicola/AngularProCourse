import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  template: `
    <app-calculator-keypad></app-calculator-keypad>
  `,
  styleUrls: ["./calculator.component.scss"]
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
