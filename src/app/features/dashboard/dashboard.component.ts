import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
    <app-navigation></app-navigation>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <app-footer> </app-footer>
  `,
  styles: [
    `
      :host {
        display: grid;
        height: 100%;
        grid-template-rows: 5rem 1fr 4rem;
      }
      /* .container {
        box-shadow: 0 3px 0 rgba(84, 94, 111, 0.2);
      } */
    `,
  ],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
