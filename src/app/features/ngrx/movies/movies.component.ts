import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movies",
  template: `
    <div>
      <app-filter></app-filter>
      <!-- <app-navbar></app-navbar> -->
    </div>
    <div class="movies">
      <app-list></app-list>
      <app-details></app-details>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: grid;
        grid-template-rows: 10rem 1fr;
      }
      .movies {
        display: flex;
        justify-content: space-around;
        padding-bottom: 30px;
      }
    `,
  ],
})
export class MoviesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
