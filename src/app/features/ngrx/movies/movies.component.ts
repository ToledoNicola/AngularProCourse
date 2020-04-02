import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movies",
  template: `
    <app-filter></app-filter>
    <app-list></app-list>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: grid;
        grid-template-rows: 5rem 1fr;
      }
    `
  ]
})
export class MoviesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
