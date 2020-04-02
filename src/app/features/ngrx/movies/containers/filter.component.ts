import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filter",
  template: `
    <app-title-filter></app-title-filter>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }
    `
  ]
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
