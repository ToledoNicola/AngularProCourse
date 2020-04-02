import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-title-filter",
  template: `
    <app-input></app-input>
  `,
  styles: [
    `
      :host {
        width: 20rem;
        display: block;
      }
    `
  ]
})
export class TitleFilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
