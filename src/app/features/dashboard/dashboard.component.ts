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
      .container {
        padding-top: 5rem;
        height: 100%;
        width: 100%;
      }
    `
  ]
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
