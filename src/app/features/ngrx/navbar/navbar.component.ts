import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <ul>
      <li routerLink="counter" routerLinkActive="active">Counter</li>
      <li routerLink="todo" routerLinkActive="active">Todo</li>
      <li routerLink="calculator" routerLinkActive="active">Calculator</li>
      <li routerLink="movies" routerLinkActive="active">Movies</li>
    </ul>
  `,
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
