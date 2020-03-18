import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngrx",
  template: `
    <app-navbar></app-navbar>
    <router-outlet> </router-outlet>
  `,
  styleUrls: ["./ngrx.component.scss"]
})
export class NgrxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
