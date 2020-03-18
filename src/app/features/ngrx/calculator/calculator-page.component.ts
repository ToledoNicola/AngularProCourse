import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator-page",
  template: `
    <app-calculator></app-calculator>
  `,
  styleUrls: ["./calculator-page.component.scss"]
})
export class CalculatorPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
