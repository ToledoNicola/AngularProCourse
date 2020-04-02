import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
    <app-navigation></app-navigation>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      :host {
        display: grid;
        height: 100%;
        grid-template-rows: 5rem 1fr;
      }
    `
  ]
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
