import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter-page",
  template: `
    <app-counter></app-counter>
  `,
  styleUrls: ["./counter-page.component.scss"]
})
export class CounterPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
