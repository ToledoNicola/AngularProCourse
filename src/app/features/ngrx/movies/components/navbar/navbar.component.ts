import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <ul>
      <li routerLink="popular" routerLinkActive="active">Popolari</li>
      <li routerLink="top_rated" routerLinkActive="active">Piu votati</li>
      <li routerLink="upcoming" routerLinkActive="active">Prossime uscite</li>
    </ul>
  `,
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
